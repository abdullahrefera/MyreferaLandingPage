// Modal.jsx
"use client";
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Do not render anything if not open

  return (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white mx-[30px] sm:mx-0  rounded-[24px] shadow-md w-full sm:w-[669px] relative"> {/* Added relative positioning here */}
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute text-[25px] top-1 right-3 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
