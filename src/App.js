import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="header"></div>
        <div className="container">
          <div className="column">
            <InboxPane />
          </div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    )
  }
}

class InboxPane extends Component {
  render() {
    return (
      <div id="inbox-pane">
        <h1>Inbox</h1>
        <table>
          <thead>
            <tr>
              <th>Chat Received</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <InboxItem />
          </tbody>
        </table>
      </div>
    )
  }
}

class InboxItem extends Component {
  render() {
    return (
      <tr>
        <td>5PM</td>
        <td>Rami Loves Pizza</td>
        <td>Order Sent</td>
      </tr>
    )
  }
}

export default App;
