const getRandomUpper = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upper[Math.floor(Math.random() * upper.length)];
}

const getRandomLower = () => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    return lower[Math.floor(Math.random() * lower.length)];
}

const getRandomNumber = () => {
    const number = "0123456789";
    return number[Math.floor(Math.random() * number.length)];
}

const getRandomSymbols = () => {
    const symbols = "!@#$%^&*()";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    numbers: getRandomNumber,
    symbols: getRandomSymbols
}

export const generateRandomPassword = (length, upper, lower, numbers, symbols) => {

    let generatedPassword = "";

    if (length === 0) {
        return null;
    };

    const typesCount = upper + lower + numbers + symbols;
    if (typesCount === 0) {
        return null;
    };

    const typesArr = [{upper}, {lower}, {numbers}, {symbols}].filter(item => Object.values(item)[0]);

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    };

    return generatedPassword.slice(0, length);
}