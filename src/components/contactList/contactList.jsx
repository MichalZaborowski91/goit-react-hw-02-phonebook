import React, { Component } from 'react';

class ContactsList extends Component {
  state = {
    filter: '',
  };
  handleChange = e => {
    const { value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      filter: value,
    }));
  };
  viewContacts = () => {
    const filter = this.state.filter;
    const contacts = this.props.contacts;
    if (filter.length === 0) {
      return contacts;
    }
    return contacts.filter(
      contact => contact.name.toLowerCase().indexOf(filter) >= 0
    );
  };
  render() {
    return (
      <div>
        <div>
          <label>
            Find contacts by name
            <input
              type="text"
              name="filter"
              placeholder="Search by name"
              value={this.state.filter}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <ul>
          {this.viewContacts().map(({ id, name, number }, index) => (
            <li key={id}>
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
