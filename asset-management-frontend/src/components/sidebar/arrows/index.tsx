import React from 'react';
import { icons } from '../../../assets';
import { ArrowType } from '../../../types/sidebar';

//stylesheet
import styles from './index.module.scss';

const Arrows: React.FC<ArrowType> = ({ menuDisplay }) => {
  return (
    <div className={styles.menu_arrow}>
      {menuDisplay ? <icons.FaAngleUp /> : <icons.FaAngleDown />}
    </div>
  );
};

export default Arrows;
