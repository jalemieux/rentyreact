//AppContainer.js
import React from 'react'
//import NumbersContainer from './NumbersContainer'
//import ClosingRequirementsContainer from './ClosingRequirementsContainer'
import MonthlyCostContainer from './MonthlyCostContainer'
import NavbarTools from '../components/NavbarTools'
import AffordabilityFormContainer from './AffordabilityFormContainer'
//import LifeOfTheLoanContainer from './LifeOfTheLoanContainer'

const App = () => (
  <div>
    <NavbarTools />
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <AffordabilityFormContainer />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <MonthlyCostContainer />   
        </div>
      </div>
      <footer>
        <hr/>
        <p className="text-center">&copy; 2016 renty, Inc.</p>
      </footer>
    </div>
  </div>
)



// <NumbersContainer />
// <ClosingRequirementsContainer />
// <LifeOfTheLoanContainer />
export default App