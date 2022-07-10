import { Component } from 'react';
// import { Formik } from 'formik';

export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
