import { Line } from 'react-chartjs-2';
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

{/* <Line
  options={...}
  data={...}
  {...props}
/> */}

const LineGraph = ({ chartData: { label, distribution } }) => {

    return(
      <div>
        <Line
        width={400}
        height={300}
            data={{
              labels: "Line",
              datasets: [{
                label,
                type: "line", 
                data: [ 12, 19, 13, 3, 16, 5, 2, 4, 10],
                backgroundColor: "#f00f00",
                hoverOffset: 4
              }],
              options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
            }}
         />
      </div>
    )
  }
  
  export default LineGraph;