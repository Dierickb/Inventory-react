import CardContainer from "../../../../Components/CardContainer";
import FormDeviceRegister from "../../../../Components/Forms/FormsRegister/FormDeviceRegister";
import FormUserRegister from "../../../../Components/Forms/FormsRegister/FormUserRegister";
import FormRegisterBrand from "../../../../Components/Forms/FormsRegister/FormRegisterBrand";
import {memo} from "react";

const Edit = () => {
    return (
        <CardContainer title="Editar" Children={
            [
                <CardContainer key="deviceRegister" title="Editar equipo"
                               Children={FormDeviceRegister} child={true}/>,

                <CardContainer key="userRegister" title="Editar usuario"
                               Children={FormUserRegister} child={true}/>,

                <CardContainer key="brandRegister" title="Editar fabricante"
                               Children={FormRegisterBrand} child={true}/>,
            ]
        } />
    )
}

export default memo(Edit)