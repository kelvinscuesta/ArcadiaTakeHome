import React, { useState } from 'react';

const ModalForm = React.forwardRef((props, ref) => {
  const {
    name,
    email,
    phone,
    id,
    modalFunction,
    editContact,
    handleClose,
  } = props;

  const [localName, setLocalName] = useState(name);
  const [localEmail, setLocalEmail] = useState(email);
  const [localPhone, setLocalPhone] = useState(phone);

  const handleChange = (e) => {
    if (e.target.name === 'name') setLocalName(e.target.value);
    if (e.target.name === 'email') setLocalEmail(e.target.value);
    if (e.target.name === 'phone') setLocalPhone(e.target.value);
  };
  const sendEdits = () => {
    const edits = { name: localName, email: localEmail, phone: localPhone };
    editContact(id, edits);
    handleClose();
  };

  // place a close button when coming back

  return (
    <div className="bg-washed-blue flex flex-column pa1 ttc" ref={ref}>
      <h3>{modalFunction} Contact</h3>
      <label>
        Current Name: {name}
        <input type="text" name="name" onChange={handleChange}></input>
      </label>
      <label>
        Current Email: {email}
        <input type="text" name="email" onChange={handleChange}></input>
      </label>
      <label>
        Current Phone: {phone}
        <input type="text" name="phone" onChange={handleChange}></input>
      </label>
      <button onClick={sendEdits}>Submit</button>
    </div>
  );
});

export default ModalForm;
