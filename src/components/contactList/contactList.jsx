import React, { Component } from 'react';

class ContactsList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map(({ name, number }, index) => (
            <li key={index}>
              {name}: {number}
              <div>
                <button onClick={() => this.props.deleteContact(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactsList;
