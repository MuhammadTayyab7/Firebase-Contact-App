//imports react-icon
import { AiOutlineClose } from "react-icons/ai";

//imports components from react-dom
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className=" grid place-items-center backdrop-blur h-screen w-screen top-0 z-40 absolute">
          <div className="m-auto z-50 relative min-h-[200px] md:min-w-[20%] lg:min-w-[20%] min-w-[80%] bg-white p-4 rounded-lg">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className=" shadow-lg cursor-pointer"
              />
            </div>
            {children}
          </div>
          <div className="backdrop-blur h-screen w-screen top-0 z-40 absolute" />
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
