var React = require('react');

// var feathers = require('feathers/client')
// var socketio = require('feathers-socketio/client');
// var hooks = require('feathers-hooks');
// var io = require('socket.io-client');


var Messages = React.createClass({
  getInitialState: function() {
      return {
        messages: [
          { text:"hi there"},
          { text:"hola"},
          { text:"bonjour!"}
        ],
      };
    },
  render: function() {

    var formattdMessages = this.state.messages.map(function(message){
      return <li>{message.text}</li>
    });
    return (
      <div>
        <p>I have here some messages</p>
        <ul>
          {formattdMessages}
        </ul>
      </div>
    )
  }
});
module.exports = Messages;