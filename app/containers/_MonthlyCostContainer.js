//MonthlyCostContainer.js

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getMonthly } from '../reducers'
import MonthlyCost from '../components/MonthlyCost'

const MonthlyCostContainer = ({ monthly }) => (
  <MonthlyCost monthly={monthly} />
)

MonthlyCostContainer.propTypes = {
	monthly: PropTypes.shape({
	  	interest: PropTypes.number.isRequired,
	  	taxes: PropTypes.number.isRequired,
	  	principal: PropTypes.number.isRequired,
	  	insurance: PropTypes.number.isRequired,
	  	piit: PropTypes.number.isRequired,
	  	taxSaving: PropTypes.number.isRequired,
	  	costAfterTax: PropTypes.number.isRequired
  	}).isRequired
} 

const mapStateToProps = (state) => ({
  monthly: getMonthly(state),
})

export default connect(
  mapStateToProps,
)(MonthlyCostContainer)