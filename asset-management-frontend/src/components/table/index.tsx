import React from 'react';
import { TablePropsType } from '../../types/exployee';
import PaginationComponent from '../Pagination';
import styles from './index.module.scss';

const TableComponent: React.FC<TablePropsType> = ({
  data,
  searchinput,
  columns,
  actions,
  currentPage,
  perPage,
  pageSize,
  handlePerPageEntities,
  handlePrevious,
  handlePages,
  handleNext,
}) => {
  const handleActionClick = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <table>
          <thead className={styles.tableHead}>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((entity: any, index: number) => (
                <tr key={index}>
                  {columns.map((column, columnIndex) => (
                    <td key={columnIndex}>{entity[column]}</td>
                  ))}
                  <td>
                    <div className={styles.btn2}>
                      {actions.map((action: string, actionIndex: number) => (
                        <button
                          key={actionIndex}
                          className={
                            action === 'Assign'
                              ? styles.btnAssign
                              : action === 'Edit'
                              ? styles.btnEdit
                              : styles.btnDelete
                          }
                          onClick={() => handleActionClick()}
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <div className={styles.noMore}>No more records</div>
            )}
          </tbody>
        </table>
      </div>
      <PaginationComponent
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

export default TableComponent;
