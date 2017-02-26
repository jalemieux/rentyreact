//AppContainer.js
import React from 'react'
import { Link } from 'react-router'
import NavbarTools from '../components/NavbarTools'


const App = ( props ) => {
  let { children } = props
  return (
  <div>
    <NavbarTools />
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
export default App