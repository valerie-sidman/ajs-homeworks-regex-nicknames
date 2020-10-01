export default class Validator {
  static validateUsername(username) {
    const firstExp = /^[\w-]+$/; // Наличие латинских букв, цифр от 0 до 9, символов - и _
    const secondExp = /^[a-zA-Z].*[a-zA-Z]$|^[a-zA-Z]$/; // Не начинается и не заканчивается цифрой, символами - или _
    const thirdExp = /^(\d{0,3}[a-zA-Z_-]+)*$/; // Не содержит подряд более трёх цифр

    return firstExp.test(username) && secondExp.test(username) && thirdExp.test(username);
  }
}
