import { icons } from "../../assets";
import { BasicButtonProps } from "../../types/form-types";

//styles
import styles from "./index.module.scss";

const BasicButton: React.FC<BasicButtonProps> = ({ clickFunction, btn_type, label, btn_className, isDisabled }) => {
  return (
    <button
      type={btn_type}
      onClick={clickFunction}
      className={`${styles.btn_style} ${btn_className === 'cancel_btn' ? styles.cancel_btn : ""}`}
      disabled={isDisabled || false}
      value={label}>
      {(label?.includes('Add') || label?.includes('Assign')) && <icons.FaPlus className={styles.icon_style} />}
      {label?.includes('Edit') && <icons.FaEdit className={styles.icon_style} />}
      {btn_type === 'file' && <icons.FaUpload className={styles.icon_style} />}
      {label}
    </button>
  );
};

export default BasicButton;