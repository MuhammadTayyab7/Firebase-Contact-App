//imports react-icons
import { IoIosContact } from "react-icons/io";
import { MdDeleteSweep } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

//imports from firbase
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

//imports custom components
import AddAndUpdateContact from "./AddAndUpdateContact";

//imports Custom Hook
import useDisclouse from "../hooks/useDisclouse";

//Imports react toast (alert messages)
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleeteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex justify-between bg-amber-200 p-2 rounded-lg"
      >
        <div className="flex gap-x-2 items-center">
          <IoIosContact className="text-5xl" />
          <div className="text-sm ">
            <h2 className="font-medium">{contact.name}</h2>
            <p>{contact.email}</p>
          </div>
        </div>
        <div className="flex text-2xl items-center gap-2">
          <CiEdit onClick={onOpen} className="cursor-pointer" />
          <MdDeleteSweep
            onClick={() => deleeteContact(contact.id)}
            className=" text-red-600 cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
