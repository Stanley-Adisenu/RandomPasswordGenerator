type GeneratePasswordOptions = {
    length: number
    includeUpperCase: boolean
    includeLowerCase: boolean
    includeNumbers: boolean
    includeSymbols: boolean
}
const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const UPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS: string = "1234567890";
const SYMBOLS = " !%^&{}|:?>@#$</.,?;[]\=-~*() " ;

function generatePassword({length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols}:GeneratePasswordOptions) {

    let chars = ""

    if (includeLowerCase) chars += LOWERCASE_LETTERS
    if (includeUpperCase) chars += UPERCASE_LETTERS
    if (includeNumbers) chars += NUMBERS
    if (includeSymbols) chars += SYMBOLS

    let password = ""
    for(let i=0;i<length; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length))
        return password
    }
}

export {generatePassword}
