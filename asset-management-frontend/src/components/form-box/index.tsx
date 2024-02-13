import React, { useEffect, useRef, useState } from 'react';
import InputField from './inputField';
import BasicButton from '../button';
import { clearAllInputValues, getAllInputValues, setAllInputValues } from '../../utils/formateData';
import { DropdownProps,FormFieldProps, DynamicFormProps } from '../../types/form-types';
import Dropdown from './dropdown';

//styles
import styles from './index.module.scss';

const FormBox: React.FC<DynamicFormProps & FormFieldProps> = ({ fields, initialData, title }) => {
  const formRef = useRef<HTMLFormElement>(null);
  console.log(initialData);
  let [inputValues, setInputValues] = useState<Record<string, string>>();

  useEffect(() => {
    if (initialData) {
      const autoFillData = (data: any) => {
        if (formRef.current) {
          setAllInputValues(formRef.current, initialData);
        }
      }
      autoFillData(initialData);
    }

  }, [])

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (formRef.current) {
      inputValues = getAllInputValues(formRef.current);
      setInputValues(inputValues);
      console.log(inputValues);
    }
  };

  const handleClear = (event: any) => {
    event.preventDefault();
    if (formRef.current) {
      clearAllInputValues(formRef.current);
    }
  }

  return (
    <form ref={formRef} className={styles.form_box} >
      <h2> {title}</h2>
      {fields.map((field) => (
        field.type === 'dropdown' ? (
          <Dropdown
            key={field.name}
            options={(field as DropdownProps).options}
            label={field.label}
          />
        ) : (
          <InputField
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name} />
        )
      ))}

      <div className={styles.btn_container}>
        {/* {isUpload ?
          <BasicButton btn_type='file' label='Upload' />
          : ""} */}
        <BasicButton label='Clear' btn_className='clear_btn' clickFunction={handleClear} />
        <BasicButton label='Save' clickFunction={handleSubmit} />
      </div>
    </form>
  );
}

export default FormBox;
