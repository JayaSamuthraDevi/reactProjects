import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useContext } from 'react';
import { PageContext } from '../../../context';
import jsonData from '../../../constants/graphData.json';
import { VendorDetails } from '../../../types/sidebar';
import { getRandomColor } from '../../../utils/chart';

//stylesheet
import styles from './index.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'start' as const,
      labels: {
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: 'Rental Assets',
      position: 'top' as 'top',
      align: 'start' as 'start',
      font: {
        size: 18,
      },
    },
  },
};

const assetsDetails: VendorDetails = jsonData.content.rentalAssetsGraph[0];

const labels = Object.keys(assetsDetails.vendor1);
const vendor = Object.keys(assetsDetails);

const datasetObject = (vendor: string) => {
  const arr: number[] = [];
  labels.forEach((label) => {
    arr.push(assetsDetails[vendor][label]);
  });
  return arr;
};

const getData = (page: string) => {
  return {
    labels,
    datasets: vendor.map((vendor) => {
      const color = getRandomColor();
      return {
        label: `${vendor}`,
        data: datasetObject(vendor),
        backgroundColor: color,
      };
    }),
  };
};

const BarChart = () => {
  const { page } = useContext(PageContext);
  const data = getData(page);
  return (
    <div className={styles.bar_graph}>
      <Bar width={'100%'} height={'100%'} options={options} data={data} />
    </div>
  );
};

export default BarChart;
