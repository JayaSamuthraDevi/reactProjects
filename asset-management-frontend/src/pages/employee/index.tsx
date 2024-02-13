import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BasicButton from '../../components/button';
import FormBox from '../../components/form-box';
import Modal from '../../components/modal';
import Search from '../../components/search';
import TableComponent from '../../components/table';
import employeeForm from '../../constants/employeeForm';
import {
  fetchEmployeeData,
  setCurrentPage,
  setPerPage,
} from '../../slices/employeeSlice';
import { AppDispatch, RootState } from '../../utils/store';
import styles from './index.module.scss';

const EmployeeDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector(
    (state: RootState) => state.employee.currentPage
  );
  const perPage = useSelector((state: RootState) => state.employee.perPage);
  const employeeData = useSelector(
    (state: RootState) => state.employee.employeeData
  );
  console.log(employeeData);

  const pageSize = useSelector((state: RootState) => state.employee.pageSize);

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
  const columns: string[] = ['employeeID', 'employeeName', 'designation'];
  const actions = ['Assign', 'Edit', 'Delete'];

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
        data={employeeData}
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

export default EmployeeDetails;
