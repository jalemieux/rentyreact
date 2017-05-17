import React, { PropTypes } from 'react'
import { Link }  from 'react-router'
import { connect } from 'react-redux'
import { change, form } from 'redux-form'


var logo = {
  background: 'url(/images/logo.png) no-repeat 0 11px',
  paddingLeft: '35px'
}

const NavbarTools = ( props ) => {
  const { user, handleSignOut } = props

  // const account = () => {
  //   if(user.token != ''){
  //     return (
  //       <li className="dropdown">
  //         <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{ user.id }<span className="caret"></span></a>
  //         <ul className="dropdown-menu">
  //           <li><Link to="account">Settings</Link></li>
  //           <li role="separator" className="divider"></li>
  //           <li><a href="#" onClick={handleSignOut}>Sign Out</a></li>
  //         </ul>
  //       </li>
  //   )}
  // }
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/*<a href="#" className="pull-left navbar-brand"><img style={logo} src="/images/building.jpeg" /></a>*/}
          <a className="navbar-brand" style={logo} href="#">Rentd</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to="cashflow" activeClassName="active">Rental Income Cashflow</Link></li>
            <li><Link to="affordability"  activeClassName="active">Affordability</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            { user.token != null ? 
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{ user.userid }<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="account">Settings</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#" onClick={handleSignOut}>Sign Out</a></li>
                </ul>
              </li>
              : null
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarTools