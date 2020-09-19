import React, { useEffect, useState } from 'react';
import ContactsDisplay from './components/ContactsDisplay';

const App = () => {
  const [fakeContacts, setFakeContacts] = useState();

  // **** think about using context here instead of prop drilling ****

  // originally having a problem proxying the client dev server to express
  // found out that parcel doesn't have the same dev configuration as webpack!
  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then((res) => res.json())
      .then((data) => setFakeContacts(data));
  }, [setFakeContacts]);

  return (
    <div className="avenir border-box lh-copy">
      <header className="f1 lh-title tc">Arcadia Contact Manager</header>
      {fakeContacts && (
        <ContactsDisplay className="lh-copy" contacts={fakeContacts} />
      )}
      <footer className="tc">
        Powered by Solar, Wind, and everything clean.
      </footer>
    </div>
  );
};

export default App;
