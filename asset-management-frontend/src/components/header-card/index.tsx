import { icons, images } from '../../assets';
import '../../styles/_styles.scss';
//stylesheet
import styles from './index.module.scss';

const HeaderCard = () => {
  return (
    <div className={styles.headerCard}>
      <p>12th Friday</p>
      <div className={`${styles.notification} flex-align-center`}>
        <icons.IoIosNotificationsOutline fontSize={27} />
        <p>4</p>
      </div>
      <div className={styles.profile}>
        <img src={images.profile} alt='A' />
      </div>
      <div className={styles.name_section}>
        <p>Shivan</p>
        <p>Admin</p>
      </div>
      <div>
        <img src={images.smile} alt='-' />
      </div>
    </div>
  );
};

export default HeaderCard;
