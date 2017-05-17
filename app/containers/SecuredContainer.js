//SecuredContainer.js
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import NavbarTools from '../components/NavbarTools'

import { 
  userSignOut
} from '../reducers/user'

import {
  getUserToken,
  getCurrentUser
} from '../api/aws'

const isUserSignedIn = () => {
  return getUserToken(getCurrentUser()) != null
}

const SecuredContainer = ( props ) => {
  let { children, user } = props

  return (
  <div>
    {children}
  </div>
)}

const mapStateToProps = (state) => {
  return {
    userSignedIn: isUserSignedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)