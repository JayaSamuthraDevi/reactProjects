import { Card } from '../../components/card';
import BarChart from '../../components/charts/bar-graph';
import DoughnutChart from '../../components/charts/doughnut';
import jsonData from './../../constants/graphData.json';

//styles
import styles from './index.module.scss';

const Home = () => {
  const assetsDetails = jsonData.content.totalAssestsGraph;
  const accessoriesDetails = jsonData.content.totalAccessoriesGraph;
  return (
    <div className={`${styles.home} flex-column`}>
      <div className={styles.home_card}>
        <Card dashboard='dashboard' />
      </div>
      <div className={styles.home_chart}>
        <div className={styles.home_chart_bar}>
          <BarChart />
        </div>
        <div className={styles.home_chart_dough}>
          <DoughnutChart data={assetsDetails} itemType={'Asset'}/>
          <DoughnutChart data={accessoriesDetails} itemType={'Accessories'} />
        </div>
      </div>
    </div>
  );
};

export default Home;
