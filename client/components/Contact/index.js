import React from 'react';
import ContactModal from '../Modal';
import './styles.css';

const Contact = (props) => {
  const { id, deleteContact, editContact, name, email, phone } = props;

  return (
    <div className="bg-white ba pa4 ma1 mw6 card shadow-5 b--light-silver">
      <p className="fw6">{name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <div className="flex">
        <ContactModal
          modalFunction="edit"
          name={name}
          email={email}
          phone={phone}
          id={id}
          editContact={editContact}
        />
        <button className="" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
