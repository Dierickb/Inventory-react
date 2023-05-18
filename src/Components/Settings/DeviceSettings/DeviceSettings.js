import CardsContainer from "../../Card/CardsContainer";
import FormSetDevice from "../../Forms/FormDevice/FormSetDevice";
import CardContainer from "../../Card/CardContainer";
import {Input} from "../../layout";
import FormGetDevice from "../../Forms/FormDevice/FormGetDevice/FormGetDevice";
import {memo} from "react";

const DeviceSettings = ({children}) => {

  return (
      <CardsContainer title="Device Settings">
          <CardContainer title="Registrar equipo"
                         Children={FormSetDevice} child={true}
                         keyValue="registerDevice"
          />

          <CardContainer title="Editar equipo"
                         keyValue="editDevice"
                         info={
                             <Input title="Serial" type="text" placeholder="Serial" name="Serial" wd="auto"/>
                         }
                         Children={FormGetDevice} child={true} textInput={true}/>

          <CardContainer title="Eliminar equipo"
                         keyValue="deleteDevice"
                         info={
                             <Input title="Serial" type="text" placeholder="Serial" name="Serial" wd="auto"/>
                         }
                         Children={FormGetDevice} child={true} textInput={true}/>
          {!!children && children}
      </CardsContainer>
  )
}

export default memo(DeviceSettings)