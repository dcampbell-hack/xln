import Chart from '../../charts';
import Table from '../tables';

const TwoPanelPieChartAndTable = ({ options: { standard, table, chart, chartData } }) => {

    return(
        <div className={`util-two-panel-col ${ standard && 'util-two-panel-reverse' }`}>
            <div className='two-panel-pie-chart'>
               <Chart type={chart.type} chartData={chartData} />
            </div>
            <div className='two-panel-table'>
               <Table type={table.type} chartData={chartData} />
            </div>
        </div>
    )

}

export default TwoPanelPieChartAndTable;