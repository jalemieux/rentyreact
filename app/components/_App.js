//App.js

import React from 'react'
import NumbersInput from '../containers/NumbersInput'
import ClosingRequirements from '../containers/ClosingRequirements'
import MonthlyCost from '../containers/MonthlyCost'
import LifeOfTheLoan from '../containers/LifeOfTheLoan'

const App = () => (
  <div>
    <NumbersInput />
    <ClosingRequirements />
    <MonthlyCost />
    <LifeOfTheLoan />
  </div>
)

export default App