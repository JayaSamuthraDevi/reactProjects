import React, { useEffect, useState } from 'react';
import TableComponent from '../../../components/table';
import BasicButton from '../../../components/button';
import FormBox from '../../../components/form-box';
import Modal from '../../../components/modal';
import employeeForm from '../../../constants/employeeForm';
import Search from '../../../components/search';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../utils/store';
import {
  fetchEmployeeData,
  setCurrentPage,
  setPerPage,
} from '../../../slices/employeeSlice';
const AssetDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector(
    (state: RootState) => state.asset.currentPage
  );
  const perPage = useSelector((state: RootState) => state.asset.perPage);
  const assetData = useSelector((state: RootState) => state.asset.assetData);
  console.log(assetData);

  const pageSize = useSelector((state: RootState) => state.asset.pageSize);

  const handlePerPageEntities = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newPerPageEntities = parseInt(event.target.value);
    dispatch(setPerPage(newPerPageEntities));
  };

  const handlePrevious = () => dispatch(setCurrentPage(currentPage - 1));
  const handlePages = (index: number) => dispatch(setCurrentPage(index));
  const handleNext = () => dispatch(setCurrentPage(currentPage + 1));

  const [isAddEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);
  const [isEditEmployeeModalOpen, setEditEmployeeModalOpen] = useState(false);
  const [input, setInput] = useState('');
    const columns: string[] = [
     'Serial Number',
     'Asset Type',
     'Specification',
     'Employee ID',
     'Vendor Name',
     'Assign Date',
     'Validity Date',
   ];
   const actions = ['Edit'];

  useEffect(() => {
    dispatch(fetchEmployeeData({ page: currentPage, perPage }));
  }, [currentPage, perPage, dispatch]);

  const handleChange = (value: string) => {
    setInput(value);
  };
  const toggleAddEmployeeModal = () => {
    setAddEmployeeModalOpen(!isAddEmployeeModalOpen);
  };
  const toggleEditEmployeeModal = () => {
    setEditEmployeeModalOpen(!isEditEmployeeModalOpen);
  };
  const [formData, setFormData] = useState<{ [key: string]: string | number }>(
    {}
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Employee Details</h1>
      <div className={styles.top}>
        <Search input={input} handleChange={handleChange} />
        <div className={styles.rightWrapper}>
          <BasicButton
            label='Add Employee'
            clickFunction={toggleAddEmployeeModal}
          />
          {isAddEmployeeModalOpen && (
            <Modal onClose={toggleAddEmployeeModal}>
              <FormBox
                fields={employeeForm}
                initialData={formData}
                title='Add Employee'
              />
            </Modal>
          )}
          <BasicButton btn_type='file' label='Upload' />
        </div>
      </div>

      <TableComponent
        data={assetData}
        searchinput={input}
        columns={columns}
        actions={actions}
        currentPage={currentPage}
        perPage={perPage}
        pageSize={pageSize}
        handlePerPageEntities={handlePerPageEntities}
        handlePrevious={handlePrevious}
        handlePages={handlePages}
        handleNext={handleNext}
      />
    </div>
  );
};

export default AssetDetails;
