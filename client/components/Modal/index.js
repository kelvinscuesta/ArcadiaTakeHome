import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import ModalForm from './ModalForm';

/**
 * decided to use a prebuilt component, albeit less customization
 * originally going to use this tutorial on a custom, reusable modal component: https://programmingwithmosh.com/javascript/create-modal-using-react/
 */

// depending on props we are either editing a contact or creating a new one
const ContactModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // will be edit if modalFunction is set to edit
  // create new contact if modalFunction is set to create

  return (
    <div>
      <button className="ttc" onClick={handleShow}>
        {props.modalFunction}
      </button>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby={`${props.modalFunction} contact box`}
        aria-labelledby="Input text in fields to edit or create a contact"
      >
        <ModalForm {...props} handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default ContactModal;
