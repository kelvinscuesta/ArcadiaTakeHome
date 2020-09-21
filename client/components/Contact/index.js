import React, { useState } from 'react';
import ContactModal from '../Modal';
import './styles.css';

const Contact = (props) => {
  const { id, deleteContact, editContact, name, email, phone } = props;

  return (
    <div className="ba pa4 mb2 card">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <ContactModal
        modalFunction="edit"
        name={name}
        email={email}
        phone={phone}
        id={id}
        editContact={editContact}
      />
      <button onClick={() => deleteContact(id)}>Delete contact</button>
    </div>
  );
};

export default Contact;
