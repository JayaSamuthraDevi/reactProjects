import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './index.module.scss';

const Search = ({ input, handleChange }: any) => {
  return (
    <div className={styles.search}>
      <FaSearch className={styles.searchIcon} />
      <input
        type='text'
        placeholder='Search...'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
