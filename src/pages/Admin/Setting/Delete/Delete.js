import CardContainer from "../../../../Components/CardContainer";
import FormDeviceRegister from "../../../../Components/FormsRegister/FormDeviceRegister/FormDeviceRegister";
import FormUserRegister from "../../../../Components/FormsRegister/FormUserRegister";
import FormRegisterBrand from "../../../../Components/FormsRegister/FormRegisterBrand";
import {memo} from "react";

const Delete = () => {
  return (
      <CardContainer title="Eliminar" Children={
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

export default memo(Delete)