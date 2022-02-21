import { LinkL } from '../utils/buttons/links'

const Summary = ({ summary: {content, url }}) => {
  return(
      <div className='xln-summary panel-padding'>
          <div className='summary-content'>
          <h4>
            {content}
          </h4>
          <LinkL text={url.text} url={url.to} icon={url.icon} show={url.show} />
          </div>
      </div>
  )
}

export default Summary;