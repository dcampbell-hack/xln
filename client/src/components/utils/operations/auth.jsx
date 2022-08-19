export const validateEmailAddress = (email) => {

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


export const validatePassword = (password, confirm) => {
    console.log('IS VALIDATING AS PASSWORD?')
    //Validation
    const validLength = String(password).length >= 8;
    const containsLowercase = String(password).match(/(?=.*[a-z])/);
    const containsUppercase = String(password).match(/(?=.*[A-Z])/);
    const containsNumber = String(password).match(/(?=.*[0-9])/);
    const containsSymbol = String(password).match(/(?=.*[!@#$%^&*])/);
    const confirmedPassword = password === confirm;

    //Error
    if(!validLength){
        return {
            status: false,
            error: "The password must be eight characters or longer"
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
    } else if(!confirmedPassword){
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