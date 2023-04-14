import CardContainer from "../../../../Components/CardContainer";
import FormDeviceRegister from "../../../../Components/Forms/FormsRegister/FormDeviceRegister";
import FormUserRegister from "../../../../Components/Forms/FormsRegister/FormUserRegister";
import FormRegisterBrand from "../../../../Components/Forms/FormsRegister/FormBrandRegister";
import {memo} from "react";

const Register = () => {
  return (
      <CardContainer title="Registrar" Children={
          [
              <CardContainer key="deviceRegister" title="Registrar equipo"
                             Children={FormDeviceRegister} child={true}/>,

              <CardContainer key="userRegister" title="Registrar usuario"
                             Children={FormUserRegister} child={true}/>,

              <CardContainer key="brandRegister" title="Registrar fabricante"
                             Children={FormRegisterBrand} child={true}/>,
          ]
      } />
  )
}

export default memo(Register)