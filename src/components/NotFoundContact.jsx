const NotFoundContact = () => {
  return (
    <div className="flex text-white h-[70vh] gap-2 justify-center items-center">
      <div>
        <img src="/Contact.png" alt="image not found:(" />
      </div>
      <h3 className="text-white text-2xl">No Contact Found</h3>
    </div>
  );
};

export default NotFoundContact;
