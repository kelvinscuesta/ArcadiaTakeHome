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
    <div>
      <header>Arcadia Contact Manager</header>
      {fakeContacts && <ContactsDisplay contacts={fakeContacts} />}
      <footer>Powered by Solar, Wind, and everything clean.</footer>
    </div>
  );
};

export default App;
