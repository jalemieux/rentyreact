//formZ.js

import { userSignIn } from './user'

//const FORMZ_FETCH = 'FORMZ_FETCH'
// export const formZFetch = (input) => ({
//   type: FORMZ_FETCH,
//   input: input
// })

function formZFetching(){
  return { type: 'FORMZ_FETCHING' }
}


function formZFetched(data) {
  return{
    type: 'FORMZ_FETCHED', 
    data: data
  }
}

function formZFetchedErr(err){
  return {
    type: 'FORMZ_FETCHED_ERROR', 
    err: err
  }
}
// reduces formZ state

export const formZReducer = (state = [], action) => {
  switch(action.type){
    case 'FORMZ_FETCHING':
      return Object.assign({}, state, { fetching: true }) 
    case 'FORMZ_FETCHED': 
      return Object.assign({}, state, { 
        fetching: false,
        data: action.data,
        error: null,
      })
    case 'FORMZ_FETCHED_ERROR':
      return Object.assign({}, state, {
        fetching: false,
        data: null,
        error: action.err,
      }) 
    case 'FORMZ_FIELD_CHANGE_VALUE':
      return Object.assign({}, state, { 
        input: Object.assign({}, state.input, 
          { [action.field]: action.value }
        )
      })

  }
  return state;
}

export function formZFieldChangeValue(field, value){
  return {
    type: 'FORMZ_FIELD_CHANGE_VALUE',
    field: field, 
    value: value
  }
}

export function formZFetch(email){
  return function (dispatch) {

    dispatch(formZFetching())

    return new Promise( (resolve, reject) => {
      window.setTimeout(
      function() {
          // We fulfill the promise !
          resolve("some_weird_token");
          //reject("some bad error")
      }, 2000);
    })
      .then( token => {
        dispatch(userSignIn(token))
        return token
      })
      .then( token => {
        dispatch(formZFetched(token))
      })
      .catch(err => {
        dispatch(formZFetchedErr(err))
      })
  }
}