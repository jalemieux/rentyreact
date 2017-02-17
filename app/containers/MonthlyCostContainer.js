//MonthlyCostContainer.js

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MonthlyCost from '../components/MonthlyCost'


const MonthlyCostContainer = ( { monthlyData } ) => {
	console.log("in monthly cost container, monthlydata is : ", monthlyData)
	return(
		<MonthlyCost monthly={monthlyData} />
	)
}

const mapStateToProps = (state) => {
	//console.log("in map state to prop lol, ", state.monthly)
	return {
  		monthlyData: state.monthly  
  	}
}

//const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  null
)(MonthlyCostContainer)