//imports custom components
import Navbar from "./components/Navbar";
import ContactCard from "./components/ContactCard";
import SearchContact from "./components/SearchContact";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

//imports react-icons
import { BsPersonAdd } from "react-icons/bs";
import { useEffect, useState } from "react";

//imports from firebase
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";

//imports Custom hook
import useDisclouse from "./hooks/useDisclouse";

//imports react toast (alert messages)
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);
      return filteredContacts;
    });
  };
  return (
    <>
      <div className="mx-auto max-w-[370px]">
        <Navbar />
        <div className="flex gap-2">
          <SearchContact filterContacts={filterContacts} />
          <BsPersonAdd
            onClick={onOpen}
            className="text-white text-4xl cursor-pointer"
          />
        </div>
        <div className="my-6 flex flex-col gap-3">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          ) : (
            <NotFoundContact />
          )}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
