import PieChart from './pie-chart';
import LineGraph from './line-graph';

const Chart = ({ type, chartData }) => {
  return(
    <div>
      {{
         pie: <PieChart chartData={chartData} />,
         line: <LineGraph chartData={chartData} /> 
      }[type]}
    </div>
  )
}


export default Chart;