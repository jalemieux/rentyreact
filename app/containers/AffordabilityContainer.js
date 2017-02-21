//AffordabilityContainer.js

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ClosingRequirements from '../components/ClosingRequirements'
import MonthlyCost from '../components/MonthlyCost'
import AffordabilityFormContainer from './AffordabilityFormContainer'


const ClosingRequirementsContainer = ( { affordability } ) => {
	//console.log("in monthly cost container, monthlydata is : ", monthlyData)
	return(
      <div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <AffordabilityFormContainer />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
  		    <div id="affordabilityMatrix" className="row">
            <div className="col-lg-12">
              <ClosingRequirements closingRequirements={affordability} />
            </div>
            <div className="col-lg-12">
              <MonthlyCost monthly={affordability} />
            </div>
            <div className="col-lg-12">
            </div>
          </div>
        </div>  
      </div>
		
	)
}

const mapStateToProps = (state) => {
	return {
  		affordability: state.affordability
  	}
}

//const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  null
)(ClosingRequirementsContainer)