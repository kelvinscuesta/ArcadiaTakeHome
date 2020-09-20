import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import ModalForm from './ModalForm';

// depending on props we are either editing a contact or creating a new one

const ContactModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // will be edit if modalFunction is set to edit
  // create new contact if modalFunction is set to create

  return (
    <div>
      <button onClick={handleShow}>{props.modalFunction}</button>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby={`${props.modalFunction} contact box`}
        aria-labelledby="Input text in fields to edit or create a contact"
      >
        <ModalForm {...props} />
      </Modal>
    </div>
  );
};

export default ContactModal;
