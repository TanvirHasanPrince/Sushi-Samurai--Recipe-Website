import React from 'react';

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" onClick={()=> onClose()}>
      <div className="w-[600px] bg-white p-2 rounded flex flex-col">
        <button
          className="text-red-700 text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <h3>Modal</h3>
      </div>
    </div>
  );
};

export default Modal;