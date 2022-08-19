import PieChart from './pie-chart';

const Chart = ({ type, chartData }) => {
  return(
    <div>
      {{
         pie: <PieChart chartData={chartData} /> 
      }[type]}
    </div>
  )
}


export default Chart;