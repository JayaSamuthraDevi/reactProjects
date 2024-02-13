import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { doughDataType, doughnutType } from '../../../types/sidebar';
import { graphBgColor, graphBorderColor } from '../../../constants/sidebar';
import { centerTextPlugin } from '../../../utils/chart';

//stylesheet
import styles from './index.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const graphData: doughDataType = (labels, values) => {
  const doughnutData = {
    labels,
    datasets: [
      {
        label: `count `,
        data: values,
        backgroundColor: graphBgColor,
        borderColor: graphBorderColor,
      },
    ],
  };
  return doughnutData;
};

const DoughnutChart: React.FC<doughnutType> = ({ data, itemType }) => {
  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'center' as const,
        labels: {
          usePointStyle: true,
        },
        padding: {
          left: 100,
        },
      },
      title: {
        display: true,
        text: `Total ${itemType}`,
        position: 'top' as 'top',
        align: 'start' as 'start',
        font: {
          size: 20,
        },
      },
      centerText: {
        text: `${itemType}`,
        color: 'black',
        fontStyle: 'Arial',
        fontSize: 100,
      },
    },
    animation: {
      onComplete: (animation: any) => {
        if (options.plugins.centerText) {
          centerTextPlugin.afterDraw(
            animation.chart,
            null,
            options.plugins.centerText
          );
        }
      },
    },
  };

  const labels = Object.keys(data);
  const values = Object.values(data);

  return (
    <div className={styles.doughnut}>
      <Doughnut
        height={100}
        width={100}
        data={graphData(labels, values)}
        options={options}
      />
    </div>
  );
};

export default DoughnutChart;
