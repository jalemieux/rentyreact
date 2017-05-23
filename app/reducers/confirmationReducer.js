//confirmationReducer.js

import { push } from 'react-router-redux'

//import { confirmation } from '../api/aws'
import { ApiFactory } from '../factories/ApiFactory'
const confirmation = ApiFactory("confirmation")

export function confirmationFetching(){
  return { 
    type: 'CONFIRMATION_FETCHING'
  }
}


export function confirmationFetched(data) {
  return{
    type: 'CONFIRMATION_FETCHED', 
    data: data
  }
}

export function confirmationFetchedErr(err){
  return {
    type: 'CONFIRMATION_FETCHED_ERROR', 
    err: err
  }
}

export function confirmationFieldChangeValue(field, value){
  return {
    type: 'CONFIRMATION_FIELD_CHANGE_VALUE',
    field: field, 
    value: value
  }
}


export function confirmationFetch(userid, code){
  return function (dispatch) {
    dispatch(confirmationFetching())
    confirmation(userid, code)
      .then( result => {
        console.log("confirmation result: ", result)
        dispatch(confirmationFetched(result))
        dispatch(push('/'))
      })
      .catch(err => {
        dispatch(confirmationFetchedErr(err))        
      })
  }
}

export function confirmationReducer(state = [], action){
  switch(action.type){
    case 'CONFIRMATION_FETCHING':
      return Object.assign({}, state, { 
        fetching: true,
        data: null, 
        error: null 
      }) 
    case 'CONFIRMATION_FETCHED': 
      return Object.assign({}, state, { 
        fetching: false,
        data: action.data,
        error: null,
        input: {}
      })
    case 'CONFIRMATION_FETCHED_ERROR':
      return Object.assign({}, state, {
        fetching: false,
        data: null,
        error: action.err.message,
      }) 
    case 'CONFIRMATION_FIELD_CHANGE_VALUE':
      return Object.assign({}, state, { 
        input: Object.assign({}, state.input, 
          { [action.field]: action.value }
        )
      })
  }
  return state;
}

