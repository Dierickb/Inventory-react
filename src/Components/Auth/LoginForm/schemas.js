import * as Yup from 'yup'
import {regularPassword, regularScotiaId} from "../../../utils/regularExpresions";

// formik --> states
export const initialValues = {
    username: "",
    password: "",
}

export const validationSchema = {
    /*
    username: Yup.string()
        .length(8, 'ScotiaId length is not the required')
        .matches(regularScotiaId, 'Scotia id must begin with s and containd 7 numbers')
        .required('Scotia id is required'),
     */
    password: Yup.string()
        .min(8, 'Password must contain a minimum of 8 characters as min')
        .max(15, 'Password must contain a maximum of 15 characters')
        //.matches(regularScotiaId, 'Minimo 8 caracteres maximo 15, al menos una letra mayúscula, ' +
        //   'una letra minucula, un dígito, o espacios en blanco y al menos 1 caracter especial,')
        .required('Password is required'),
    username: Yup.string().email('Invalid email')

}