import { Doughnut } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const PieChart = ({ chartData: { label, distribution } }) => {

  const harvestLabels = () => distribution.map( dist =>  dist.allocation);
  const harvestPercentage = () => distribution.map( dist => dist.percentage * 100);
  const harvestColor = () => distribution.map( dist =>  dist.color);
  return(
    <div>
      <Doughnut
      width={500}
      height={700}
          data={{
            labels: harvestLabels(),
            datasets: [{
              label,
              data: harvestPercentage(),
              backgroundColor: harvestColor(),
              hoverOffset: 4
            }]
          }}
       />
    </div>
  )
}

export default PieChart;