function validatePIN(pin) {
var isNumber = /^\d{4}$|^\d{6}$/.test(pin)
return isNumber
}
