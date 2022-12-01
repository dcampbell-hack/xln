import '../../../css/Util.scss';
import FormLayout from './template/form/formLayout';
import TwoPanelTextImageCol from './two-panel/TwoPanelTextImageCol';
import TwoPanelTextImageRow from './two-panel/TwoPanelTextImageRow';
import TwoPanelPieChartAndTable from './two-panel/TwoPanelPieChartAndTable';
import EmployeePanel from './EmployeePanel';
import TableOfContents from './table-contents/';
import Point from './Point';


const FormatLayout = ({type, options }) => {
   return(
       <>
          {{
            "form": <FormLayout options={options} />,
            "panel-image-text-col": <TwoPanelTextImageCol options={options} />,
            "panel-image-text-row": <TwoPanelTextImageRow options={options} />,
            "panel-chart-table": <TwoPanelPieChartAndTable options={options} />,
            "employee-panel": <EmployeePanel />,
            "table-contents": <TableOfContents  options={options} />,
            "point": <Point />
          }[type]
         }
       </>
   )
}

export default FormatLayout;