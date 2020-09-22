import React, { useEffect, useState } from 'react';
import ContactsDisplay from './components/ContactsDisplay';
import ContactModal from './components/Modal';

// for this project will just directly hit the server in development
// I figure in production this endpoint would be built differently
const api = 'http://localhost:3001/contacts';

const App = () => {
  // **** think about using context here instead of prop drilling ****
  const [fakeContacts, setFakeContacts] = useState();

  function deleteContact(contactId) {
    fetch(`${api}/${contactId}`, {
      method: 'DELETE',
    }).catch((err) => console.log('Request failed check err:', err));

    setFakeContacts(fakeContacts.filter(({ id }) => contactId !== id));
  }

  // api will send back the updated object, can use that to replace the object in the array
  function editContact(contactId, updatedFields) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFields),
    };

    fetch(`${api}/${contactId}`, options)
      .then((response) => response.json())
      .then((updatedContact) => {
        // getting an updatedContact object, want to find and replace that object with the one in state already

        setFakeContacts(
          fakeContacts.map((contact) => {
            if (contact.id === contactId) return { ...updatedContact };
            else return contact;
          })
        );
      })
      .catch((err) => console.log('Request failed check err:', err));
  }

  function createContact(createdFields) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createdFields),
    };

    fetch(`${api}`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log('new contact created:', data);
        // NOTE: wonder if theres a better way to not mess up flow of state
        const updatedContacts = [...fakeContacts, data];
        setFakeContacts(updatedContacts);
      });
  }

  // NOTE: originally having a problem proxying the client dev server to express
  // found out that parcel doesn't have the same dev configuration as webpack!
  useEffect(() => {
    fetch(`${api}`)
      .then((res) => res.json())
      .then((data) => setFakeContacts(data));
  }, [setFakeContacts]);

  // TODO: Think of placement of create contact button

  return (
    <div className="avenir border-box lh-copy">
      <header className="lh-title tc">
        <h1 className="f3 fw6">Arcadia Contact Manager</h1>
        <ContactModal modalFunction={'create'} createContact={createContact} />
      </header>
      {fakeContacts && (
        <ContactsDisplay
          className="lh-copy"
          contacts={fakeContacts}
          deleteContact={deleteContact}
          editContact={editContact}
        />
      )}
      <footer className="f4 tc">
        Powered by Solar, Wind, and everything clean.
      </footer>
    </div>
  );
};

export default App;
