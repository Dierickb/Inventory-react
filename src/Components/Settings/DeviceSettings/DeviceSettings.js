import CardsContainer from "../../Card/CardsContainer";
import FormSetDevice from "../../Forms/FormDevice/FormSetDevice";
import CardContainer from "../../Card/CardContainer";
import {Input} from "../../layout";
import FormGetDevice from "../../Forms/FormDevice/FormGetDevice/FormGetDevice";
import {memo} from "react";
import {deviceSettingsKeysValues} from "../../../utils/utilities";

const DeviceSettings = ({children}) => {

  return (
      <CardsContainer title="Device Settings">
          <CardContainer title="Registrar equipo"
                         Children={FormSetDevice} child={true}
                         keyValue={deviceSettingsKeysValues.REGISTER_DEVICE}
          />

          <CardContainer title="Editar equipo"
                         keyValue={deviceSettingsKeysValues.EDIT_DEVICE}
                         info={
                             <Input title="Serial" type="text" placeholder="Serial" name="Serial" wd="auto"/>
                         }
                         Children={FormGetDevice} child={true} textInput={true}/>

          <CardContainer title="Eliminar equipo"
                         keyValue={deviceSettingsKeysValues.DELETE_DEVICE}
                         info={
                             <Input title="Serial" type="text" placeholder="Serial" name="Serial" wd="auto"/>
                         }
                         Children={FormGetDevice} child={true} textInput={true}/>
          {!!children && children}
      </CardsContainer>
  )
}

export default memo(DeviceSettings)