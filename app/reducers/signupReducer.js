//signupReducer.js

//signUpContainer.js

import { signUp } from '../api/aws'

import { push } from 'react-router-redux'

export function signUpFetching(){
  return { 
    type: 'SIGNUP_FETCHING'
  }
}

import { refreshUserid } from './sessionReducer'


export function signUpFetched(data) {
  return{
    type: 'SIGNUP_FETCHED', 
    data: data
  }
}

export function signUpFetchedErr(err){
  return {
    type: 'SIGNUP_FETCHED_ERROR', 
    err: err
  }
}

export function signUpFieldChangeValue(field, value){
  return {
    type: 'SIGNUP_FIELD_CHANGE_VALUE',
    field: field, 
    value: value
  }
}


export function signUpFetch(userid, password){
  return function (dispatch) {

    dispatch(signUpFetching())
    signUp(userid, password)
      .then( user => {
        console.log("user: ", user)
        dispatch(signUpFetched(user.getUsername()))
        dispatch(refreshUserid(user.getUsername()))
        dispatch(push('/confirmation'))
      })
      .catch(err => {
        dispatch(signUpFetchedErr(err))        
      })

  }
}

export function signupReducer(state = [], action){
  switch(action.type){
    case 'SIGNUP_FETCHING':
      return Object.assign({}, state, { 
        fetching: true,
        data: null, 
        error: null 
      }) 
    case 'SIGNUP_FETCHED': 
      return Object.assign({}, state, { 
        fetching: false,
        data: action.data,
        error: null,
        input: {}
      })
    case 'SIGNUP_FETCHED_ERROR':
      return Object.assign({}, state, {
        fetching: false,
        data: null,
        error: action.err.message,
      }) 
    case 'SIGNUP_FIELD_CHANGE_VALUE':
      return Object.assign({}, state, { 
        input: Object.assign({}, state.input, 
          { [action.field]: action.value }
        )
      })
  }
  return state;
}

