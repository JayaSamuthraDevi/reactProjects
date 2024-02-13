import styles from './index.module.scss'
import { VendorCard } from '../vendor';
import {vendor} from '../../../constants/card'
import { AssetListCard } from '../asset';
import {listofEmployeeAsset} from '../../../constants/card';

export type ListofEmployeeAssetType = {
  check?: boolean;
};

export const ScrollerComponent: React.FC<ListofEmployeeAssetType> = ({
  check,
})=> {
  return (
    <div className={styles.scrollerwrap}>
    <div className={styles.scroller}>
      {check===undefined && vendor?.map((item: any, index) => {
        return <VendorCard key={index} vendorDetails={item}/>;
      })}
    </div>
    <div className={styles.scrollerasset}>
      {check!==undefined && listofEmployeeAsset?.map((item: any, index) => {
          return <AssetListCard key={index} cardDetails={item} check={check} />;
        })}
    </div>
  </div>
  )
}