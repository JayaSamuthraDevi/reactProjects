import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../../../actions/authAction';
import { PageContext } from '../../../context';
import { MenuType } from '../../../types/sidebar';
import Arrows from '../arrows';

//stylesheet
import styles from './index.module.scss';

const Menu = ({ captions, states }: MenuType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { page, setPage } = useContext(PageContext);
  const { icon, name, submenu } = captions;
  const { menuDisplay, setMenuDisplay } = states;

  const handleClick = async () => {
    menuDisplay ? setMenuDisplay(false) : setMenuDisplay(true);
    if (name === 'Logout') {
      await userLogout(dispatch, navigate);
    } else {
      setPage(name);
      navigate(`/dashboard/${name.toLowerCase()}`);
    }
  };

  return (
    <div
      className={
        page === name ? `${styles.menu} ${styles.menuSelected} ` : styles.menu
      }
      onClick={handleClick}
    >
      {icon}
      <p>{name}</p>
      {page === name && submenu && <Arrows menuDisplay={menuDisplay} />}
    </div>
  );
};

export default Menu;
