import { token } from "morgan";

const Table = ({ chartData }) => {

const calculateAmount = (percentage) => { 

const amount = chartData.totalSupply * (percentage);

if(chartData.percentageArr.length < chartData.distribution.length){
  chartData.percentageArr.push((percentage * 100 ));
}
if(chartData.allocationArr.length < chartData.distribution.length){
chartData.allocationArr.push(amount);
}
return amount;
}

const calculateSum = (arr) => arr.reduce((a, b) => a + b, 0);

const verifyTokenSupply = (supply) => {

  const tokenSupply = Math.round(calculateSum(supply));
  const value = tokenSupply !== chartData.totalSupply ? 'not token supply' : tokenSupply;
  return value;
}

const mapAllocation = () => chartData.allocation.map((name) =>  <th key={name}>{name}</th>)

const mapDistribution = () => chartData.distribution.map(({ allocation, percentage, color}) => <tr key={allocation} style={{ backgroundColor: color }}>
<td>{allocation}</td>
<td>{percentage * 100}%</td>
<td>{calculateAmount(percentage).toLocaleString("en-US")}</td>
</tr>)


    return(
        <table className="xln-table">
          <thead>
        <tr>
          {mapAllocation()}
        </tr>
        </thead>
        <tbody>
          { mapDistribution() }
        <tr className="table-allocation-col-total">
        <td>Total</td>
          <td>{calculateSum(chartData.percentageArr)}%</td>
          <td>{verifyTokenSupply(chartData.allocationArr).toLocaleString("en-US")}</td>
        </tr>
        </tbody>
      </table>
    )
}


export default Table;