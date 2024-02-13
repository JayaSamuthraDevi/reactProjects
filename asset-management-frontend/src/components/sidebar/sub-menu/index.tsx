import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubMenuType } from '../../../types/sidebar';
import { PageContext } from '../../../context';

//stylesheet
import styles from './index.module.scss';

const SubMenu = ({ subPages }: SubMenuType) => {
  const { page, subPage, setSubPage } = useContext(PageContext);
  const navigate = useNavigate();
  return (
    <div className={`${styles.subMenu} flex-column`}>
      {subPages.map((menuItem, index) => {
        return (
          <div
            className={subPage === menuItem ? styles.selected : ''}
            key={index + 1}
            onClick={() => {
              setSubPage(menuItem);
              navigate(
                `/dashboard/${page.toLowerCase()}/${menuItem.toLowerCase()}`
              );
            }}
          >
            <p>{menuItem}</p>
          </div>
        );
      })}
    </div>
  );
};
export default SubMenu;
