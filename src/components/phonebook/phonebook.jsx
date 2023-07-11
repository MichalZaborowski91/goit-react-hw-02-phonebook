import React, { Component } from 'react';
import ContactAdd from 'components/contactAdd/contactAdd';
import ContactsList from 'components/contactList/contactList';
import Filter from 'components/filter/filter';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = newProduct => {
    let array = [];
    // eslint-disable-next-line no-lone-blocks
    {
      this.state.contacts.map(contact =>
        array.push(contact.name.toLowerCase())
      );
    }
    if (array.includes(newProduct.name.toLowerCase())) {
      return alert(`${newProduct.name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newProduct],
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
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactAdd addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Phonebook;
