import React, { useContext, useState } from 'react';
import { PageContext } from '../../../context';
import { sidebar } from '../../../constants/sidebar';
import { MenuContainerType } from '../../../types/sidebar';
import Menu from '../menu';
import SubMenu from '../sub-menu';

//stylesheet
import styles from './index.module.scss';

const SideBar = () => {
  const { page } = useContext(PageContext);
  const [menuDisplay, setMenuDisplay] = useState(false);

  const menuProps = {
    menuDisplay: menuDisplay,
    setMenuDisplay: setMenuDisplay,
  };
  return (
    <div className={`${styles.sidebar} flex-column-center`}>
      <div className={styles.sidebar_logo}>
        <img src={sidebar.logo} alt='DIVUM' />
      </div>
      <div className={styles.sidebar_navLinks}>
        {sidebar.menu.map((menu: MenuContainerType, index: number) => {
          return (
            <React.Fragment key={index}>
              <Menu captions={menu} states={menuProps} />
              {page === menu.name && menu.submenu && menuDisplay && (
                <SubMenu subPages={menu.submenu} />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className={styles.sidebar_logout}>
        <Menu captions={sidebar.logout} states={menuProps} />
      </div>
    </div>
  
  );
};

export default SideBar;
