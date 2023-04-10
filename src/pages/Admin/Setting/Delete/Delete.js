import CardContainer from "../../../../Components/CardContainer";
import FormDeviceRegister from "../../../../Components/Forms/FormsRegister/FormDeviceRegister";
import FormUserRegister from "../../../../Components/Forms/FormsRegister/FormUserRegister";
import FormRegisterBrand from "../../../../Components/Forms/FormsRegister/FormRegisterBrand";
import {memo} from "react";

const Delete = () => {
  return (
      <CardContainer title="Eliminar" Children={
          [
              <CardContainer key="deviceRegister" title="Eliminar equipo"
                             Children={FormDeviceRegister} child={true}/>,

              <CardContainer key="userRegister" title="Eliminar usuario"
                             Children={FormUserRegister} child={true}/>,

              <CardContainer key="brandRegister" title="Eliminar fabricante"
                             Children={FormRegisterBrand} child={true}/>,
          ]
      } />
  )
}

export default memo(Delete)