//user.js


const login = (userid, password) => (
  new Promise.resolve('some_weird_token')
)

import { push } from 'react-router-redux'

//import { signOut } from '../api/aws'
import { ApiFactory } from '../factories/ApiFactory'
const signOut = ApiFactory("signOut")


export function signedOut(){
  return {
    type: 'USER_SIGNOUT'
  }
}


export function invalidateSession(){
  return function (dispatch) {
    dispatch(signedOut())
    signOut()
    dispatch(push('/'))
  }
}


export function  refreshToken(token) {
  return {
    type: 'USER_TOKEN_REFRESH',
    token: token
  }
}

export function refreshSession(userid, token) {
 return {
    type: 'USER_SESSION_REFRESH',
    userid: userid, 
    token: token
  } 
}
export function refreshUserDetails(user) {
  return {
    type: 'USER_DETAILS_REFRESH',
    user: user, 
  }
}

export function refreshUserid(userid){
  return {
    type: 'USER_ID_REFRESH',
    userid: userid
  }
}

export const sessionReducer = (state = [], action) => {
  switch(action.type){
    case 'USER_AUTHED':
      return Object.assign({}, state, { 
        token: action.token,
        userid: action.userid
      })
    case 'USER_SIGNOUT':
      return Object.assign({}, state, { 
        token: null, 
        userid: null
       })
    case 'USER_TOKEN_REFRESH':
      return Object.assign({}, state, {
        token: action.token
      })
    case 'USER_SESSION_REFRESH':
      return Object.assign({}, state, {
        token: action.token,
        userid: action.userid
      })
    case 'USER_DETAILS_REFRESH':
      return Object.assign({}, state, {
        userid: action.user['email']
      })
    case 'USER_ID_REFRESH':
      return Object.assign({}, state, {
        userid: action.userid
      })
  }
  return state;
}