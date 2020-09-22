import React, { useState } from 'react';

const ModalForm = React.forwardRef((props, ref) => {
  // ideally would only want the necessary props down here
  const {
    name,
    email,
    phone,
    id,
    modalFunction,
    editContact,
    handleClose,
    createContact,
  } = props;

  const [localName, setLocalName] = useState(name);
  const [localEmail, setLocalEmail] = useState(email);
  const [localPhone, setLocalPhone] = useState(phone);

  const handleChange = (e) => {
    if (e.target.name === 'name') setLocalName(e.target.value);
    if (e.target.name === 'email') setLocalEmail(e.target.value);
    if (e.target.name === 'phone') setLocalPhone(e.target.value);
  };

  // TODO: consolidate these two functions into one based on what was sent to // modalFunction prop indicating an edit or creating a new contact

  const sendEdits = () => {
    const edits = { name: localName, email: localEmail, phone: localPhone };
    editContact(id, edits);
    handleClose();
  };
  const sendCreation = () => {
    const createdContact = {
      name: localName,
      email: localEmail,
      phone: localPhone,
    };
    createContact(createdContact);
    handleClose();
  };

  // TODO: close button consideration and where it makes sense for focus to move

  // TODO: change inputs to more semantic tags like email and phone number

  return (
    <div className="bg-washed-green flex flex-column pa3 mv2 ttc" ref={ref}>
      <h3>{modalFunction} Contact</h3>
      <ul className="flex flex-column mv1 pa2 list">
        <li className="pa1">
          <label>
            {modalFunction} Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            ></input>
          </label>
        </li>
        <li className="pa1">
          <label>
            {modalFunction} Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            ></input>
          </label>
        </li>
        <li className="pa1">
          <label>
            {modalFunction} Phone:
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleChange}
            ></input>
          </label>
        </li>
      </ul>
      {editContact ? (
        <button className="w4" onClick={sendEdits}>
          Submit Edits
        </button>
      ) : (
        <button className="w5" onClick={sendCreation}>
          Create Contact
        </button>
      )}
    </div>
  );
});

export default ModalForm;
