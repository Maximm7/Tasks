function isValidPhoneNumber(phoneNumber) {

    const cleaned = phoneNumber.replace(/\D/g, '')

    if (cleaned.length !== 11 && cleaned.length !== 12) {
        return false
    }

    if (!/^(\+4|3)/.test(cleaned)) {
        return false
    }

    if (!/^(\+?\d{1,3}|\(\d{1,3,}\))/.test(cleaned.slice(1))) {
        return false
    }
    if (!/^[\d\- ]+$/.test(cleaned.slice(phoneNumber.indexOf(' ')+1))) {
        return false
    }
    return true
}

console.log(isValidPhoneNumber('39991112233'))
console.log(isValidPhoneNumber('3 (999) 1112233'))
console.log(isValidPhoneNumber('+4 (999) 111-22-33'))
console.log(isValidPhoneNumber('+4 (999) 111 22 33'))
console.log(isValidPhoneNumber('+3 (999) 111 22 33'))
console.log(isValidPhoneNumber('+3 (999) 111 22 3366'))


