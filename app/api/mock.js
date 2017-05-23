//mock.js

class Flipper {
  constructor(){
    this.bit = 0
  }
  flip(succeed, fail){
    if(this.bit %2 == 0){
      succeed()
    }else{
      console.log("lol, error!")
      fail()
    }
    this.bit += 1
  }
}

const flipper = new Flipper

const mockSession = {

}

const mockUser = {
  username: "test@user.com",
  email: "test@user.com",
  token: "some_long_and_very_random_token",
  getSession: () => { return mockSession },
  getUserAttributes: () => { return mockUser }
}



export const signUp = ( email, password = null ) => {
  return new Promise((resolve, reject) => {
    flipper.flip(
      () => resolve(email), 
      () => reject(new Error("something happened"))
    )
  });
}
export const confirmation = (userid, code ) => {
  return new Promise(( resolve, reject) => {
    flipper.flip(
      () => resolve(userid), 
      () => reject(new Error("something happened"))
    )
  });  
}



// --------- SIGN IN -------------- //
export const signIn = (username, password) => {
  return new Promise((resolve, reject) => {
    flipper.flip(
      () => resolve(mockUser.token), 
      () => reject(new Error("something happened"))
    )
  }); 
}

// ----------- SIGN OUT -----------//

export const signOut = () => {
 return flipper.flip(
    () => null,
    () => new Error("something happened")
  )
}


// ----------- SESSION -----------//


export const getCurrentUser = () => {
  return mockUser
}

export const getUserToken = (currentUser) => {
  return flipper.flip(
    () => mockUser.token,
    () => new Error("something happened")
  )
}

export const getCurrentSession = (success, failure) => {
 return flipper.flip(
    () => success(mockSession),
    () => failure(new Error("something happened"))
  )
}
export const getCurrentUserAttributes = (success, failure) => {
  return flipper.flip(
    () => success(mockUser),
    () => failure(new Error("something happened"))
  ) 
}


export default {
  signUp: signUp,
  confirmation: confirmation,
  signIn: signIn,
  signOut: signOut,
  getCurrentUser: getCurrentUser,
  getUserToken: getUserToken,
  getCurrentUserAttributes: getCurrentUserAttributes,
  getCurrentSession: getCurrentSession
}
