import React, { useEffect, useState } from 'react';
import ContactsDisplay from './components/ContactsDisplay';

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

  // originally having a problem proxying the client dev server to express
  // found out that parcel doesn't have the same dev configuration as webpack!
  useEffect(() => {
    fetch(`${api}`)
      .then((res) => res.json())
      .then((data) => setFakeContacts(data));
  }, [setFakeContacts]);

  return (
    <div className="avenir border-box lh-copy">
      <header className="f1 lh-title tc">Arcadia Contact Manager</header>
      {fakeContacts && (
        <ContactsDisplay
          className="lh-copy"
          contacts={fakeContacts}
          deleteContact={deleteContact}
        />
      )}
      <footer className="tc">
        Powered by Solar, Wind, and everything clean.
      </footer>
    </div>
  );
};

export default App;
