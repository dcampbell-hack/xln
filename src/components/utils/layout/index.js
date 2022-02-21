import '../../../css/Util.scss';
import TwoPanelImageForm from './two-panel/TwoPanelImageForm';
import TwoPanelTextImage from './two-panel/TwoPanelTextImage';
import EmployeePanel from './EmployeePanel';
import Point from './Point';


const FormatLayout = ({type, options}) => {
   return(
       <div>
          {{
            "panel-image-form": <TwoPanelImageForm options={options} />,
            "panel-image-text": <TwoPanelTextImage options={options} />,
            "employee-panel": <EmployeePanel />,
            "point": <Point />
          }[type]
         }
       </div>
   )
}

export default FormatLayout;