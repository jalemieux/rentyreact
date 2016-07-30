// notifications.js
var React = require('react');
var notificationsData = require("../data/notifications");
var Notification = require('./notification');

var Router = require('react-router');
var Link = Router.Link;

var Notifications = React.createClass({
  getInitialState: function() {
      return {
        notificationsData: notificationsData,
      };
    },
  render: function() {
    var notifications = this.state.notificationsData.map(function(notification){
      return (
        <div className="alert alert-warning alert-dismissible" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <Link to={notification.link} className="alert-link">{notification.text}</Link> 

        </div>
        );
    })
    return (
      <div>
        {notifications}
      </div>
    );
  }
});
module.exports = Notifications;