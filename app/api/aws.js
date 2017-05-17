//aws.js

import { creds } from '../config'

import { 
  CognitoUserPool, 
  AuthenticationDetails, 
  CognitoUserAttribute,
  CognitoUser } from 'amazon-cognito-identity-js';


export const signUp = ( email, password ) => {
  const userPool = new CognitoUserPool({
    UserPoolId: creds.cognito.USER_POOL_ID,
    ClientId: creds.cognito.APP_CLIENT_ID
  });
  
  var attributes = [
    new CognitoUserAttribute({
      Name: 'email',
      Value: email
    }), 
  ];
  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, attributes, null, function(err, result){
      if(err) return reject(err)
      resolve(result.user)
    })
  });
}

export const signIn = (username, password) => {
  const userPool = new CognitoUserPool({
    UserPoolId: creds.cognito.USER_POOL_ID,
    ClientId: creds.cognito.APP_CLIENT_ID
  });
  const authenticationData = {
    Username: username,
    Password: password
  };

  const user = new CognitoUser({ Username: username, Pool: userPool });
  const authenticationDetails = new AuthenticationDetails(authenticationData);

  return new Promise((resolve, reject) => (
    user.authenticateUser(authenticationDetails, {
      onSuccess: (result) => resolve(result.getIdToken().getJwtToken()),
      onFailure: (err) => reject(err),
    })
  ));
}

export const signOut = () => {
   const cognitoUser = getCurrentUser()
   console.log("signOut: ", cognitoUser)
    if(cognitoUser != null){
      cognitoUser.signOut()
    }
}

export const getCurrentUser = () => {
  const userPool = new CognitoUserPool({
    UserPoolId: creds.cognito.USER_POOL_ID,
    ClientId: creds.cognito.APP_CLIENT_ID
  });
  return userPool.getCurrentUser();
}

export const getUserToken = (currentUser) => {
  currentUser.getSession( (err, session) => {
    if(err){
      reject(err)
      return
    }
    resolve(session.getIdToken().getJwtToken())
  })
}

export const getCurrentSession = (success, failure) => {
  const cognitoUser = getCurrentUser()
  if(cognitoUser != null){
    cognitoUser.getSession(function(err, session) {
      if (err) {
         return failure(err)
      }
      return success(session)
    })
  }
}
export const getCurrentUserAttributes = (success, failure) => {
  const cognitoUser = getCurrentUser()
  if(cognitoUser != null){
    cognitoUser.getUserAttributes(function(err, result) {
        if (err) {
            return failure(err)
        }
        return success(result)
    }); 
}}
