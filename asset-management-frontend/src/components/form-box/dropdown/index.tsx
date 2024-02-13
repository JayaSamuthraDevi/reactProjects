import React, { useState } from 'react';
import { DropdownProps } from '../../../types/form-types';

//styles
import styles from './index.module.scss'

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  defaultValue,
  label,name
}) => {
  let [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(event.target.value);
  }

  return (
    <div className={`${styles.input_div} ${styles.dropdown}`}>
      {label && <label className={`${styles.label_text} `}>{label}</label>}
      <select id={name} className={`${styles.input_box} ${styles.dropdown_toggle}`}
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option id={option.name} key={option.value} value={option.value} className={styles.option} >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

