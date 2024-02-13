import React from 'react';
import styles from './index.module.scss';
import { vendortype } from '../../../types/card';
import { icons } from '../../../assets/index';

export type Vendortype = {
  vendorDetails: vendortype;
};
export const VendorCard: React.FC<Vendortype> = ({ vendorDetails }) => {
  return (
    <div className={styles.vendorCard}>
      <div className={styles.header}>
        <h3>{vendorDetails.vendorname}</h3>
        <icons.FaIdCard className={styles.FaIdCardIcon} />
      </div>
      <div className={styles.vendorCardBody}>
        <p>{vendorDetails.assetno} Assets</p>
        <button>
          More Details <icons.FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};
