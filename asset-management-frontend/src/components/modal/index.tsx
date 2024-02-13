import React from 'react'
import { icons } from '../../assets/index';
import ModalProps from '../../types/modal-type';

//styles
import styles from './index.module.scss';

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <>
      <div className={styles.modal_div}>
        <icons.AiOutlineClose className= {styles.close_icon} onClick={onClose} />
        {children ? children : ""}
      </div>
    </>
  );
};

export default Modal