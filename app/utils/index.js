//utils.js

var Utils = {
  capitalizeFirstLetter:  function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  },
  cognito: {
    USER_POOL_ID : 'YOUR_COGNITO_USER_POOL_ID',
    APP_CLIENT_ID : 'YOUR_COGNITO_APP_CLIENT_ID',
  }
};


module.exports = Utils;