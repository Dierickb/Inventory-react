import CardsContainer from "../../Card/CardsContainer";
import FormUser from "../../Forms/FormUser";
import {memo} from "react";
import CardContainer from "../../Card/CardContainer";
import {Input} from "../../layout";

const UserSettings = () => {
  return (
      <CardsContainer title="User Settings">
          <CardContainer title="Registrar usuario"
                         Children={FormUser} child={true}/>

          <CardContainer title="Editar usuario"
                         info={
                             <Input title="ScotiaId" type="text" placeholder="ScotiaId" name="ScotiaId" wd="auto"/>
                         }
                         Children={FormUser} child={true} textInput={true}/>

          <CardContainer title="Eliminar usuario"
                         info={
                             <Input title="ScotiaId" type="text" placeholder="ScotiaId" name="ScotiaId" wd="auto"/>
                         }
                         Children={FormUser} child={true} textInput={true}/>
      </CardsContainer>
  )
}

export default memo(UserSettings)