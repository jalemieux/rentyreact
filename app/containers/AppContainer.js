//AppContainer.js
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import NavbarTools from '../components/NavbarTools'

import { 
  invalidateSession
} from '../reducers/sessionReducer'

const App = ( props ) => {
  let { children } = props
  return (
  <div>
    <NavbarTools 
      {...props}
    />
    <div className="container">
      <div className="row">
        {children}
      </div>
      <footer>
        <hr/>
        <p className="text-center"><Link to="about">About</Link> | &copy; 2017 rentd.me, Inc.</p>
      </footer>
    </div>
  </div>
)}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignOut: () => {
      dispatch(invalidateSession())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)