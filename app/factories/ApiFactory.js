//ApiFactory.js
import { api as apiConfig } from '../config'

import mock  from '../api/mock'
import aws from '../api/aws'

//console.log("mock: ", mock)

export const ApiFactory = ( method ) => {
  switch(apiConfig.env){
    case "test": 
      return mock[method]
    case "live":
      return aws[method]
    default: 
      return Error("undefined env type")
  }
}

