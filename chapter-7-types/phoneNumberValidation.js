function validateLarry1(phoneNumber) {
    if (phoneNumber !== 8) {
        return false;
    }
    for (let i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.charAt(i) !== '-') {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
}

function validateLarry2(phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {
        return false;
    }
    for (let i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.length === 8 && phoneNumber.charAt(i) !== '-') {
                return false;
            } else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }   
}

function validateBrad1(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }
    let first = phoneNumber.substring(0,3);
    let second = phoneNumber.substring(4);

    if (phoneNumber.charAt(3) !== '-' || isNaN(first) || isNaN(second)) {
        return false;
    }
    return true;
}

function validateBrad2(phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {
        return false;
    }
    let first = phoneNumber.substring(0,3);
    let second = phoneNumber.substring(phoneNumber.length - 4);

    if (isNaN(first) || isNaN(second)) {
        return false;
    }
    if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === '-');
    }
    return true;
}
// to debug
function validateGpt(phoneNumber) {
    const parts = phoneNumber.split('-');
    
    if (parts.length === 2) {
        const [first, second] = parts;
        return (
            first.length === 3 &&
            second.length === 4 &&
            !isNaN(first) &&
            !isNaN(second)
        );
    } else if (parts.length === 1 && phoneNumber.length === 8) {
        return phoneNumber.charAt(3) === '-';
    }
    
    return false;
}