export const LimitChars = (str,amount) => {

    let newStr

    str.length > amount
    ? newStr = str.substr(0, amount) + "..."
    : newStr = str

    return newStr
}