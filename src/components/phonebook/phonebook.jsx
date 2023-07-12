import React, { Component } from 'react';
import ContactAdd from 'components/contactAdd/contactAdd';
import ContactsList from 'components/contactList/contactList';
import { nanoid } from 'nanoid';
import css from './phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = newContact => {
    let existingContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (existingContact) {
      return alert(`${newContact.name} is already in contacts`);
    }
    newContact.id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  deleteContact = index => {
    this.setState(prevState => {
      const updatedContacts = [...prevState.contacts];
      updatedContacts.splice(index, 1);
      return { contacts: updatedContacts };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className={css.section}>
        <div className={css.phonebook}>
          <h1 className={css.header}>Phonebook</h1>
          <ContactAdd addContact={this.addContact} />
        </div>
        <h2 className={css.header}>Contacts</h2>
        <ContactsList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Phonebook;
