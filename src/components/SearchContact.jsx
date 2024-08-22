//import react icons
import { FiSearch } from "react-icons/fi";

const SearchContact = ({ filterContacts }) => {
  return (
    <div className="flex relative items-center flex-grow">
      <FiSearch className="ml-2 text-white text-2xl absolute" />
      <input
        onChange={filterContacts}
        placeholder="Search Contact"
        type="text"
        className="pl-10 text-white bg-transparent h-10 border border-white rounded-lg flex-grow"
      />
    </div>
  );
};

export default SearchContact;
