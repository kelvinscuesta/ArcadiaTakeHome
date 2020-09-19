import React from 'react';

const Contact = (props) => {
  const { name, email, phone, id } = props;

  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{id}</p>
    </div>
  );
};

export default Contact;
