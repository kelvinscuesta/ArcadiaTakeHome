import React from 'react';
import Contact from '../Contact';

// will house the list of contacts
const ContactsDisplay = (props) => {
  const { contacts } = props;

  const contactsList = contacts.map(({ name, email, phone, id }) => (
    <Contact name={name} email={email} phone={phone} id={id} />
  ));

  return <div>{contactsList}</div>;
};

export default ContactsDisplay;
