import React, { useState } from 'react';
import ContactModal from '../Modal';
import './styles.css';

const Contact = (props) => {
  // come back to reorganize state
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);

  const { id, deleteContact } = props;

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
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
      />
      <button onClick={() => deleteContact(id)}>Delete contact</button>
    </div>
  );
};

export default Contact;
