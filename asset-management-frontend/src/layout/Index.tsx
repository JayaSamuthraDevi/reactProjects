import { Outlet } from 'react-router-dom';
import HeaderCard from '../components/header-card';
import SideBar from '../components/sidebar/sidebar';

//stylesheet
import styles from './index.module.scss';

function Layout() {
  return (
    <div className={`${styles.assetsLandingPage} flex-row`}>
      <div>
        <SideBar />
      </div>
      <div className={`${styles.flexColumn} flex-column`}>
        <div className={styles.head}>
          <HeaderCard />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
