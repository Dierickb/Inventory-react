export const regularPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
/**
 *
 * @type {RegExp}
 * Minimo 8 caracteres maximo 15,
 * Al menos una letra mayúscula,
 * Al menos una letra minucula,
 * Al menos un dígito,
 * No espacios en blanco,
 * Al menos 1 caracter especial,
 */


export const regularScotiaId = /^s\d{7}/g;

/**
 *
 * @type {RegExp}
 * It must begin with letter s,
 * It must contain 7 numbers,
 *
 */