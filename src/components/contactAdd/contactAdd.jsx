import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
};
class ContactAdd extends Component {
  nameNanoId = nanoid();

  state = {
    id: '',
    name: '',
    number: '',
  };
  handleChange = e => {
    const { id, name, number, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      id,
      [name]: value,
      [number]: value,
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameNanoId}>Name</label>
          <input
            id={this.nameNanoId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            required
            onChange={this.handleChange}
          />
          <label htmlFor={this.nameNanoId}>Number</label>
          <input
            id={this.nameNanoId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            required
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactAdd;
