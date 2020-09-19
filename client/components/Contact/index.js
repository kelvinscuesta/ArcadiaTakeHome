import React from 'react';
import './styles.css';

const Contact = (props) => {
  const { name, email, phone, id, deleteContact } = props;

  return (
    <div className="ba pa4 mb2 card">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button onClick={() => deleteContact(id)}>Delete contact</button>
    </div>
  );
};

export default Contact;
