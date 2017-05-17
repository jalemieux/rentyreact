//SignInContainer.js

import { refreshSession } from './sessionReducer'
import { signIn } from '../api/aws'

import { push } from 'react-router-redux'

function signInFetching(){
  return { 
    type: 'SIGNIN_FETCHING'
  }
}


function signInFetched(data) {
  return{
    type: 'SIGNIN_FETCHED', 
    data: data
  }
}

function signInFetchedErr(err){
  return {
    type: 'SIGNIN_FETCHED_ERROR', 
    err: err
  }
}

export function signInFieldChangeValue(field, value){
  return {
    type: 'SIGNIN_FIELD_CHANGE_VALUE',
    field: field, 
    value: value
  }
}


export function signInFetch(input){
  return function (dispatch) {

    dispatch(signInFetching())
    signIn(input.userid, input.password)
      .then( token => {
        dispatch(refreshSession(input.userid, token))
        dispatch(signInFetched(token))
        dispatch(push('/auth'))
      })
      .catch(err => {
        dispatch(signInFetchedErr(err))        
      })

  }
}

export function signinReducer(state = [], action){
  switch(action.type){
    case 'SIGNIN_FETCHING':
      return Object.assign({}, state, { 
        fetching: true,
        data: null, 
        error: null 
      }) 
    case 'SIGNIN_FETCHED': 
      return Object.assign({}, state, { 
        fetching: false,
        data: action.data,
        error: null,
        input: {}
      })
    case 'SIGNIN_FETCHED_ERROR':
      return Object.assign({}, state, {
        fetching: false,
        data: null,
        error: action.err.message,
      }) 
    case 'SIGNIN_FIELD_CHANGE_VALUE':
      return Object.assign({}, state, { 
        input: Object.assign({}, state.input, 
          { [action.field]: action.value }
        )
      })
  }
  return state;
}


