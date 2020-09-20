import React from 'react';

const ModalForm = React.forwardRef((props, ref) => {
  const { name, email, phone, setName, setEmail, setPhone, id } = props;

  return (
    <div className="bg-washed-blue flex flex-column pa1 ttc" ref={ref}>
      <h3>{props.modalFunction} Contact</h3>
      <label>
        Current Name: {name}
        <input type="text" name="name"></input>
      </label>
      <label>
        Current Email: {email}
        <input type="text" name="name"></input>
      </label>
      <label>
        Current Phone: {phone}
        <input type="text" name="name"></input>
      </label>
      <button>Submit</button>
    </div>
  );
});

export default ModalForm;
