import React from 'react';
import Contact from '../Contact';
import './styles.css';

// will house the list of contacts
const ContactsDisplay = (props) => {
  const { contacts } = props;

  const contactsList = contacts.map(({ name, email, phone, id }) => (
    <Contact key={id} name={name} email={email} phone={phone} id={id} />
  ));

  return <ul className="contacts-container">{contactsList}</ul>;
};

export default ContactsDisplay;
