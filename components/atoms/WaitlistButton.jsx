// WaitlistButton.jsx
"use client";
import React, { useState } from 'react';
import Modal from '../organisms/Modalform'; // Make sure to import the Modal component
import JoinWaitingListForm from '../organisms/JoinWaitingListForm'; // Import your form

const WaitlistButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleWaitList = () => {
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div>
      <button 
        className='bg-[#0D0ED6] rounded-[10px] w-[100%] flex justify-center py-4 px-7 sm:py-[16px] sm:w-[433px] text-white sm:text-[32px] font-bold' 
        onClick={handleWaitList}
      >
        Join The Waitlist
      </button>
      
      {/* Modal with the form */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <JoinWaitingListForm />
      </Modal>
    </div>
  );
};

export default WaitlistButton;
