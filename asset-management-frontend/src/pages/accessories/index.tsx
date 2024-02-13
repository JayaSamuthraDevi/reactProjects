import React, { useEffect, useState } from 'react'
import BasicButton from '../../components/button';
import Modal from '../../components/modal';
import FormBox from '../../components/form-box';
import accessoriesForm, { assignAccessory, editSingleAccessory } from '../../constants/accessoriesForm';

function Accessories() {
  const [isAddAccessoriesModalOpen, setAddAccessoriesModalOpen] = useState(false);
  const [isEditAccessoriesModalOpen, setEditAccessoriesModalOpen] = useState(false);
  const [isAssignAccessoriesModalOpen, setAssignAccessoriesModalOpen] = useState(false);
  const [isEditSingleAccessoriesModalOpen, setEditSingleAccessoriesModalOpen] = useState(false);

  const toggleAddAccessoriesModal = () => {
    setAddAccessoriesModalOpen(!isAddAccessoriesModalOpen);
  };

  const toggleEditAccessoriesModal = () => {
    setEditAccessoriesModalOpen(!isEditAccessoriesModalOpen);
  };
  const toggleAssignAccessoriesModal = () => {
    setAssignAccessoriesModalOpen(!isAssignAccessoriesModalOpen);
  };
  const toggleEditSingleAccessoriesModal = () => {
    setEditSingleAccessoriesModalOpen(!isEditSingleAccessoriesModalOpen);
  };
  const [formData, setFormData] = useState<{ [key: string]: string | number }>({});
  useEffect(() => {
    //while integeration with api it will be needed .

    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('your_api_endpoint');
    //       const data = response.data;
    setFormData({
      accessoryName: 'keyboard',
      count: '10'
    });
    //     } catch (error) {
    //       console.error('There was an error fetching the data:', error);
    //     }
    //   };
    // fetchData();
  }, []);
  return (
    <>
      <div className='btn-flex-end-gap-m-1'>
        <BasicButton label='Add Accessories' clickFunction={toggleAddAccessoriesModal} />
        {isAddAccessoriesModalOpen && (
          <Modal onClose={toggleAddAccessoriesModal}>
            <FormBox fields={accessoriesForm} title='Add Accessories' />
          </Modal>
        )}
        <BasicButton label='Edit Accessories' clickFunction={toggleEditAccessoriesModal} />
        {isEditAccessoriesModalOpen && (
          <Modal onClose={toggleEditAccessoriesModal}>
            <FormBox fields={accessoriesForm} initialData={formData} title='Edit Accessories' />
          </Modal>
        )}
        <BasicButton label='Assign' 
        clickFunction={toggleAssignAccessoriesModal} />
        {isAssignAccessoriesModalOpen && (
          <Modal onClose={toggleAssignAccessoriesModal}>
            <FormBox fields={assignAccessory} title='Assign Accessories' />
          </Modal>
        )}
        <BasicButton label='Edit inside Table' clickFunction={toggleEditSingleAccessoriesModal} />
        {isEditSingleAccessoriesModalOpen && (
          <Modal onClose={toggleEditSingleAccessoriesModal}>
            <FormBox fields={editSingleAccessory} title='Edit Accessories' />
          </Modal>
        )}

      </div>
    </>
  )
}

export default Accessories;