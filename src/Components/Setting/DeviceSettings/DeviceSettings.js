import CardsContainer from "../../Card/CardsContainer";
import FormDevice from "../../Forms/FormDevice/FormSetDevice";
import {memo} from "react";
import CardContainer from "../../Card/CardContainer";
import {Input} from "../../layout";
import FormGetDevice from "../../Forms/FormDevice/FormGetDevice/FormGetDevice";

const DeviceSettings = () => {
  return (
      <CardsContainer title="Device Settings" Children={
          [
              <CardContainer key="deviceRegister" title="Registrar equipo"
                             Children={FormDevice} child={true}/>,

              <CardContainer key="deviceEdit" title="Editar equipo"
                             info={
                                 <Input title="Serial" type="text" placeholder="Serial" name="Serial" wd="auto"/>
                             }
                             Children={FormGetDevice} child={true} textInput={true}/>,

              <CardContainer key="deviceDelete" title="Eliminar equipo"
                             info={
                                 <Input title="Serial" type="text" placeholder="Serial" name="Serial" wd="auto"/>
                             }
                             Children={FormDevice} child={true} textInput={true}/>,
          ]
      } />
  )
}

export default memo(DeviceSettings)