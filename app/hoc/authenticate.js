//auth.js
import React from 'react'
import {
  getCurrentSession,
  getCurrentUserAttributes,
  getCurrentUser
} from '../api/aws'

import { 
  refreshToken,
  refreshUserDetails
} from '../reducers/sessionReducer'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

// this higher order component is: 
// - connected to the store, for the user auth state
// - wraps a component that is to be displayed only if the user auth state is true
// this is an enahnced (store connected) version of : http://stackoverflow.com/questions/31084779/how-to-restrict-access-to-routes-in-react-router
const mapStateToProps = (state) => {
  return {
     user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hanldeReroute: (route) => {
      dispatch(push(route))
    },
    handleRefreshToken: (token) => {
      dispatch(refreshToken(token))
    },
    handleRefreshUserDetails: (user, token) => {
      dispatch(refreshUserDetails(user, token))
    }
  }
}


export const authenticate = (WrappedComponent) => {
  var hoc = class extends React.Component {
    constructor(props){
      super(props)
      this.isAuthenticated = false
    }
    componentWillMount(){
      let { hanldeReroute, handleRefreshToken, handleRefreshUserDetails } = this.props
      let { isAuthenticated } = this
      let user = getCurrentUser()
      if(user != null){
        user.getSession( (err, session) => {
          if(err){
            console.log("error: ", err)
            handleReroute('/signin')
            return
          }
          handleRefreshUserDetails(session.getIdToken().getJwtToken())    
        })
        user.getUserAttributes( (err, user) => {
          if(err){
            console.log("error: ", err)
            handleReroute('/signin')
            return
          }
          var userDetails = {}
          for(let prop of user){
            userDetails[prop.getName()] = prop.getValue()
          }
          handleRefreshUserDetails(userDetails)
        })
      }
      // getCurrentSession(
      //   (session) => {
      //     console.log("got a session! ", session)
      //     getCurrentUserAttributes(
      //       (user) => console.log("user details obj: ", user),
      //       (err) => console.log("user details error: ", err)
      //     )
      //     updateToken(session.getIdToken().getJwtToken())
      //   },
      //   (err) => {
      //     handleReroute('/signin')
      //   }
      // )
    }
    render(){
      let { token } = this.props.user
      return (
         token ? 
          <WrappedComponent {...this.props} /> :
          null
        
      )
    }

  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(hoc)
}

