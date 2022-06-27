import { LinkL } from '../utils/buttons/links'

const Summary = ({ summary: {content, url }}) => {

  return(
      <div className='xln-summary panel-padding'>
          <div className='summary-content'>
          <h4>
            {content}
          </h4>
          <a href={url.to} className="btn btn-link" target="_blank">{url.text} <i className={url.icon}></i></a>
          </div>
      </div>
  )
}

export default Summary;