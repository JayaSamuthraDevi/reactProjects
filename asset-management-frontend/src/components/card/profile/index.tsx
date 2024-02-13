import {profileCardItem} from '../../../constants/card';
import styles from './index.module.scss';

export const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profilePic}>{profileCardItem?.Employeephoto}</div>
      <div className={styles.detail}>
        <p>{profileCardItem?.EmployeName}</p>
        <p>{profileCardItem?.EmployeId}</p>
      </div>
    </div>
  );
};