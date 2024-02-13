import styles from './index.module.scss';
import {dashboarCardItems }from '../../../constants/card'
export const DashboardCard = () => {
  return (
    <div className={styles.dashboardcard}>
      {dashboarCardItems?.map((item, index: number) => (
        <div key={index} className={styles.dashboard}>
          <h4>{item.category}</h4>
          <h4>{item.total}</h4>
        </div>
      ))}
    </div>
  );
};
