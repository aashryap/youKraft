

const CONSTRAINTS = {
    REQUIRED_TRUE: 'REQUIRED_TRUE',
    CUSTOM: 'CUSTOM',
    EMAIL: 'EMAIL',
    MOBILE: 'MOBILE',
    CUSTOM_FUNCTION: 'CUSTOM_FUNCTION',
    NUMBER: 'NUMBER',
    MIN_LENGTH: 'MIN_LENGTH',
    MAX_LENGTH: 'MAX_LENGTH'
}

const createValidityObject = (isValid, constraintName, errorMessage) => {
    if (isValid) {
        return {isValid: true}
    } else {
        return {
            isValid,
            constraintName,
            errorMessage
        }
    }
}

export const validate = (value, constraints=[]) => {
    let validity = {isValid: true};
    for (let i=0;i<constraints.length;i++) {
        console.log({constraints})
        switch(constraints[i].contraintName) {
            case CONSTRAINTS.REQUIRED_TRUE:
                validity = createValidityObject(checkRequiredTrue(value), CONSTRAINTS.REQUIRED_TRUE, constraints[i].errorMessage);
                break;
            case CONSTRAINTS.CUSTOM:
                validity = createValidityObject(checkCustom(value, constraints[i]?.pattern), CONSTRAINTS.CUSTOM, constraints[i].errorMessage);
                break;
            case CONSTRAINTS.EMAIL:
                validity = createValidityObject(checkEmail(value), CONSTRAINTS.EMAIL, constraints[i].errorMessage);
                break;
            case CONSTRAINTS.MOBILE:
                validity = createValidityObject(checkMobile(value), CONSTRAINTS.MOBILE, constraints[i].errorMessage);
                break;
            case CONSTRAINTS.CUSTOM_FUNCTION:
                validity = createValidityObject(constraints[i].func(value), CONSTRAINTS.MOBILE, constraints[i].errorMessage);
                break;
            case CONSTRAINTS.NUMBER:
                validity = createValidityObject(checkOnlyNumber(value), CONSTRAINTS.NUMBER, constraints[i].errorMessage);
                break;
            case CONSTRAINTS.MIN_LENGTH:
                validity = createValidityObject(checkMin(value, constraints[i].length), CONSTRAINTS.NUMBER, constraints[i].errorMessage);
                break;
            case CONSTRAINTS.MAX_LENGTH:
                validity = createValidityObject(checkMax(value, constraints[i].length), CONSTRAINTS.NUMBER, constraints[i].errorMessage);
                break;
            default:
                validity = {isValid: true}
        }
        if (!validity?.isValid) {
            return validity;
        }
    }    
    return validity;
}

export const checkRequiredTrue = (value) => {
    if (value === null || value === undefined || value === "") return false;
    return true
}

export const checkEmail = (value) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return checkCustom(value, emailRegex)
}

export const checkMobile = (value) => {
    const mobileNumberRegex = /^\d{10}$/;
    return checkCustom(value, mobileNumberRegex)
}

export const checkOnlyNumber = (value) => {
    const numberRegex = /^[0-9]*$/;
    return checkCustom(value, numberRegex);
}

export const checkCustom = (value, pattern) => {
    console.log("Pattern ", pattern, value, pattern.test(value));
    if (pattern.test(value)) {
        return true;
    }
    return false
}

export const checkMax = (value, maxLength) => {
    if(value.toString().length < maxLength) {
        return true
    }
    return false;
}

export const checkMin = (value, minLength) => {
    if(value.toString().length > minLength) {
        return true
    }
    return false;
}

export default {
    validate,
    checkRequiredTrue,
    checkCustom
}
