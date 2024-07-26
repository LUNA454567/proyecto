import React, { useState } from 'react';
import ModalPledge from './ModalPledge';
import ViewReplaceFormPladgeWithoutCreditorTenure from '../../views/viewReplaceFormPladgeWithoutCreditorTenure';

export default function ParentComponent() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showAdditionalView, setShowAdditionalView] = useState(false);

  const handleCloseModal = () => {
    console.log('Cerrando modal...');
    setIsModalOpen(false);
  };

  const handleShowAdditionalView = () => {
    console.log('Mostrando vista adicional...');
    setShowAdditionalView(true);
  };

  return (
    <div>
      <ModalPledge
        openModal={isModalOpen}
        handleCancel={handleCloseModal}
        handleShowAdditionalView={handleShowAdditionalView}
      />

      {showAdditionalView && <ViewReplaceFormPladgeWithoutCreditorTenure />}
    </div>
  );
}
