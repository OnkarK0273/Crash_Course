import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Addcontacts from "./components/Addcontacts";
import List from "./components/List";

function App() {
  const [contacts, setContacts] = useState([]);

  const handleContacts = (name, email) => {
    const payload = {
      name,
      email,
      id: Date.now() + Math.random(),
    };

    const contactList = [...contacts, payload];
    setContacts(contactList);
  };

  

  return (
    <>
      <Addcontacts handleContacts={handleContacts} />
        {
          contacts.length?<List   data = {contacts} />:<h2>Please Add Contacts Details</h2>
        }
        
    </>
  );
}

export default App;
