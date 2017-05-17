//Home.js
import React from 'react'
import { Link } from 'react-router'

const Home = ( props ) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
      <h1>Home</h1>
      <Link to="/signin">sign in!</Link>
    </div>
    )
}


export default Home