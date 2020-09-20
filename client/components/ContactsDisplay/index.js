import React from 'react';
import Contact from '../Contact';
import './styles.css';

const ContactsDisplay = (props) => {
  const { contacts, deleteContact } = props;

  const contactsList = contacts.map(({ name, email, phone, id }) => (
    <Contact
      key={id}
      name={name}
      email={email}
      phone={phone}
      id={id}
      deleteContact={deleteContact}
    />
  ));

  return <ul className="contacts-container">{contactsList}</ul>;
};

export default ContactsDisplay;
