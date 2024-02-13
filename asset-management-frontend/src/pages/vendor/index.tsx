import { useEffect, useState } from 'react';
import BasicButton from '../../components/button';
import { Card } from '../../components/card';
import FormBox from '../../components/form-box';
import Modal from '../../components/modal';
import vendorForm from '../../constants/vendorForm';


const Vendor = () => {
  const [isAddVendorModalOpen, setAddVendorModalOpen] = useState(false);
  const [isEditVendorModalOpen, setEditVendorModalOpen] = useState(false);

  const toggleAddVendorModal = () => {
    setAddVendorModalOpen(!isAddVendorModalOpen);
  };

  const toggleEditVendorModal = () => {
    setEditVendorModalOpen(!isEditVendorModalOpen);
  };
  const [formData, setFormData] = useState<{ [key: string]: string | number }>({});

  useEffect(() => {
    //while integeration with api it will be needed .

    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('your_api_endpoint');
    //       const data = response.data;
          setFormData({
            vendor:'amazon',
            location:'banglore',
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
        <BasicButton label='Add Vendor' clickFunction={toggleAddVendorModal} />
        {isAddVendorModalOpen && (
          <Modal onClose={toggleAddVendorModal}>
            <FormBox fields={vendorForm} title='Add Vendor'/>
          </Modal>
        )}
        <BasicButton btn_type='file' label='Upload' />
        <BasicButton label='Edit Vendor' clickFunction={toggleEditVendorModal}/>
        {isEditVendorModalOpen && (
          <Modal onClose={toggleEditVendorModal}>
            <FormBox fields={vendorForm} initialData={formData} title='Edit Vendor'/>
          </Modal>
        )}
      </div>
      <Card cardtype='vendor'/>
    </>
  );
};

export default Vendor;
