//DashboardContainer.js
import React from 'react'
import { connect } from 'react-redux'

const DashboardContainer = ( proops ) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12">
      Dashboard!
    </div>
  )
}


export default connect(
  null, 
  null)(DashboardContainer)
