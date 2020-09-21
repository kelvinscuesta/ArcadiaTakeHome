import React from 'react';
import Contact from '../Contact';
import './styles.css';

const ContactsDisplay = (props) => {
  const { contacts, deleteContact, editContact } = props;

  const contactsList = contacts.map(({ name, email, phone, id }) => (
    <Contact
      key={id}
      name={name}
      email={email}
      phone={phone}
      id={id}
      deleteContact={deleteContact}
      editContact={editContact}
    />
  ));

  return <ul className="contacts-container">{contactsList}</ul>;
};

export default ContactsDisplay;
