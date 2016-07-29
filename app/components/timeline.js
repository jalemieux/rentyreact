//timeline.js
var React = require('react');
var EventsData = require('../data/events');
require("../styles/timeline.css")
var Timeline = React.createClass({
  getInitialState: function() {
      return {
        eventsData: EventsData,
      };
    },
  render: function() {
    events = this.state.eventsData.map(function(event){
      return (
        <tr>
          <td>{event.ts}</td>
          <td>{event.desc}</td>
        </tr>
        );
    })
    return (
      <div> 
        <table className="table timeLineTable">
          <tbody>
          {events}
          </tbody>
        </table>
      </div>
    )
  }
});
module.exports = Timeline;