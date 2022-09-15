const validEmailAddress = (email) => {

let isCorrect;

// Validation
isCorrect = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

// Error
if(!isCorrect){
    return {
        status: false,
        error: "Email is not valid"
    }
}

// Correct
return {
    status: true,
    error: ""
};

}


const validPassword = (values) => {

const { password } = values;

    //Validation
    const validLength = String(password).length >= 10;
    const containsLowercase = String(password).match(/(?=.*[a-z])/);
    const containsUppercase = String(password).match(/(?=.*[A-Z])/);
    const containsNumber = String(password).match(/(?=.*[0-9])/);
    const containsSymbol = String(password).match(/(?=.*[!@#$%^&*])/);
    let confirmedPassword;
    if(values?.confirm) confirmedPassword = password === values.confirm;

    console.log('Validate Passwords -------', confirmedPassword )

    //Error
    if(!validLength){
        return {
            status: false,
            error: "The password must be 10 characters or longer"
        } 
    } else if(!containsLowercase){
        return {
            status: false,
            error: "The password must contain at least 1 lowercase alphabetical character"
        }
    }  else if(!containsUppercase){
        return {
            status: false,
            error: "The password must contain at least 1 uppercase alphabetical character"
        }
    } else if(!containsNumber){
        return {
            status: false,
            error: "The password must contain at least 1 numeric character"
        }
    } else if(!containsSymbol){
        return {
            status: false,
            error: "The string must contain at least one special character"
        }
    } else if(confirmedPassword == false ){
        return {
            status: false,
            error: "The passwords do not match"
        }
    }

    // Correct
    return {
        status: true,
        error: ""
    };
}




export function validAuthLogin(values, addNewError){

if(Object.keys(values).length === 0) return;

const Passwordvalues = validPassword(values);
const Emailvalues = validEmailAddress(values.email);

  if ( !Emailvalues.status) {
    setShowError(true);
    addNewError(Emailvalues.error);
  }

  if ( !Passwordvalues.status) {
    setShowError(true);
    addNewError(Passwordvalues.error);
  }
}

export async function validAuthRegister(values, addNewError, findUsername ){

  if(Object.keys(values).length === 0) return  addNewError('Please enter valid inputs. Fields cannot be empty');


  if( values.firstname == undefined ) return addNewError('Please enter First Name');
  if( values.firstname.length < 2 )  return addNewError('First Name must be atleast 2 characters');

  if( values.lastname == undefined ) return addNewError('Please enter Last Name');
  if( values.lastname.length < 2 )  return addNewError('Last Name must be atleast 2 characters');

  if( values.username == undefined ) return addNewError('Please enter Username');
  if( values.username.length < 2 )  return addNewError('Username must be atleast 2 characters');
  const isUsername = await findUsername(values.username);
  console.log('Find Username', isUsername)
if(isUsername) return addNewError("This username already exist")


  const passwordValues = validPassword(values);
  const emailValues = validEmailAddress(values.email);

}