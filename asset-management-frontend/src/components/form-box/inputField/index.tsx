import React, { useState, memo } from 'react';
import formatDate from '../../../utils/formateData';
import { InputFieldProps } from '../../../types/form-types';

//styles
import styles from './index.module.scss';

const InputField: React.FC<InputFieldProps> = memo(({  label, type, name, preFillValue }) => {
  const [value, setValue] = useState(type === 'date' ? formatDate(new Date()) : '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(event.target.value);
  }
console.log(value,formatDate(value));
  return (
    <div className={styles.input_div}>
      <div> {label && <label htmlFor={name} className={styles.label_text}>{label}</label>}
      </div>
      <div>
        <input
          type={type}
          className={styles.input_box}
          name={name}
          value={preFillValue !== "" ? preFillValue : value}
          max={type === 'date' ? formatDate(new Date()) : undefined}
            onChange={handleChange}
        />
      </div>
    </div>
  );
});

export default InputField;