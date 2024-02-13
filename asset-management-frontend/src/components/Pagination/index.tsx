import React from 'react';
import { PaginationProps } from '../../types/exployee';
import styles from './index.module.scss';

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  pageSize,
  perPage,
  handlePerPageEntities,
  handlePrevious,
  handlePages,
  handleNext,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.dropDown}>
        Show
        <select value={perPage} onChange={handlePerPageEntities}>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
        entries
      </div>
      <div className={styles.paginate}>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={styles.paginatePrev}
        >
          Previous
        </button>
        {[...Array(pageSize)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePages(index + 1)}
            className={
              currentPage === index + 1
                ? styles.activePage
                : styles.paginateNumber
            }
          >
            {index + 1}
          </button>
        ))}
        <button
          className={styles.paginateNext}
          onClick={handleNext}
          disabled={currentPage === pageSize}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
