import CardsContainer from "../../Card/CardsContainer";
import FormUser from "../../Forms/FormUser";
import {memo} from "react";
import CardContainer from "../../Card/CardContainer";
import {Input} from "../../layout";

const UserSettings = () => {
  return (
      <CardsContainer title="User Settings" Children={
          [
              <CardContainer key="userRegister" title="Registrar usuario"
                             Children={FormUser} child={true}/>,

              <CardContainer key="userEdit" title="Editar usuario"
                             info={
                                 <Input title="ScotiaId" type="text" placeholder="ScotiaId" name="ScotiaId" wd="auto"/>
                             }
                             Children={FormUser} child={true} textInput={true}/>,

              <CardContainer key="userDelete" title="Eliminar usuario"
                             info={
                                 <Input title="ScotiaId" type="text" placeholder="ScotiaId" name="ScotiaId" wd="auto"/>
                             }
                             Children={FormUser} child={true} textInput={true}/>,
          ]
      } />
  )
}

export default memo(UserSettings)