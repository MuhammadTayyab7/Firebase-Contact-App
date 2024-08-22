//imports from firbase
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

//imports custom components
import Modal from "./Modal";

//imports from formik (Form haddler react component)
import { Formik, Form, Field, ErrorMessage } from "formik";

//imports from react toast (alert messages)
import { toast } from "react-toastify";

//import yup package
import * as Yup from "yup";

const contactsSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        validationSchema={contactsSchemaValidation}
        initialValues={
          isUpdate
            ? {
                name: contact.name,
                email: contact.email,
              }
            : {
                name: "",
                email: "",
              }
        }
        onSubmit={(values) => {
          isUpdate ? updateContact(values, contact.id) : addContact(values);
        }}
      >
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field
              name="name"
              className="border rounded-md h-10 pl-2"
              placeholder="Enter Name"
            />
            <div className="text-red-500 text-xs">
              <ErrorMessage name="name" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Email</label>
            <Field
              name="email"
              className="border rounded-md h-10 pl-2"
              placeholder="Enter Emial"
            />
            <div className="text-red-500 text-xs">
              <ErrorMessage name="email" />
            </div>
          </div>
          <button className="bg-orange px-3 py-1.5 border rounded-md self-end">
            {isUpdate ? "Update" : "Add"} Contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateContact;
