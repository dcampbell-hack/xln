import { LinkB } from "../utils/buttons/buttons";


const Error = ({ auth }) => {

const determineError = (status) => {
  switch(status){
    case status:
        return auth.error
     case 4001:
         return 'Authenticate your wallet extension.'
     case -32602:
        return 'Trouble getting user balance'
     default:
         return 'There is an error'
  }
}


    return (
        <div className="error-container">
            <div>
            <LinkB text="x" click={() => console.log('close')} />
            </div>
            <div>
               {determineError(auth.status)}
            </div>
        </div>
    )
}

export default Error;