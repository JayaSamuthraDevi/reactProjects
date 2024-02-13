import React from 'react';
import { employeeAssetType } from '../../../types/card';
import styles from './index.module.scss';
import { icons } from '../../../assets';

export type assetCard = {
  cardDetails: employeeAssetType;
  check?: boolean;
};

export const AssetListCard: React.FC<assetCard> = ({ cardDetails, check }) => {
  return (
    <div className={styles.assetCard}>
      <div className={styles.header}>
        <div className={styles.title}>
          <icons.FaDesktop className={styles.desktopIcon}/>
          <p>{cardDetails.name}</p>
        </div>
        {check ? (
          <input className={styles.check} type='checkbox' />
        ) : (
          <icons.FiEdit className={styles.editIcon}/>
        )}
      </div>
      <div className={styles.assetCardBody}>
        <p>{cardDetails.deviceConfiguration}</p>
        <p>{cardDetails.serialnumber}</p>
        <p>{cardDetails.date}</p>
        <p>{cardDetails.validity}</p>
      </div>
    </div>
  );
};
