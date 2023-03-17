import {useFormik} from "formik";
import * as Yup from 'yup'
import {useState} from "react";
import {useAuth} from "../../../contexts/Auth";
import { useHistory } from "react-router-dom";

import './LoginForm.scss'
import InputsContainer from "./InputsContainer";
import {initialValues, validationSchema} from "./schemas";

const LoginForm = () => {
    const [wrongPassword, setWrongPassword] = useState(false)
    const [wrongUser, setWrongUser] = useState(false)
    const history = useHistory()
    const {login} = useAuth()

    const handleLogin = async ({username, password}) => {
        try {
            const isLoggedIn = await login(username, password);
            isLoggedIn && history.push("/dashboard")
        } catch (e) {
            (e.message === 'Firebase: Error (auth/wrong-password).') && setWrongPassword(true)
            (e.message === 'Firebase: Error (auth/user-not-found).') && setWrongUser(true)
            throw e.message
        }
    }

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object(validationSchema),
        validateOnChange: false,
        onSubmit: async (obj) => {
            await handleLogin(obj)
        }
    })

  return (
      <form className="formLogin" onSubmit={formik.handleSubmit}>
          <InputsContainer props={{
              placeholder:"Scotia Id", fontSize:"medium", name:"username",
              onChange: formik.handleChange, error:formik.errors.username,
            }}
          />
          {wrongUser && <span>Username incorrect</span>}
          <InputsContainer props={{
              placeholder:"Password ", fontSize:"medium", name:"password",
              onChange: formik.handleChange, error:formik.errors.password,
            }}
          />
          {wrongPassword && <span>Password incorrect</span>}
          <div className="change-password">
              Para cambiar la contraseña
              <span title="Comuniquese con su supervisor">(?)</span>
          </div>
          <button type="submit">Entrar</button>
      </form>
  )
}
export default LoginForm


