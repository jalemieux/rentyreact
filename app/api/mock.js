//mock.js

class Flipper {
  constructor(){
    this.bit = 0
  }
  flip(succeed, fail){
    if(this.bit %2 == 0){
      succeed()
    }else{
      fail()
    }
    this.bit += 1
  }
}

const flipper = new Flipper

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

