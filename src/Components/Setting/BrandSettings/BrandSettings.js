import CardsContainer from "../../Card/CardsContainer";
import FormGetDevice from "../../Forms/FormDevice/FormGetDevice";
import FormUser from "../../Forms/FormUser";
import FormBrand from "../../Forms/FormBrand";
import {memo} from "react";
import CardContainer from "../../Card/CardContainer";
import FormBrandDropDown from "../../Forms/FormDevice/common/FormBrandDropDown";

const BrandSettings = () => {
    return (
        <CardsContainer title="Brand Settings" Children={
            [
                <CardContainer key="brandRegister" title="Registrar fabricante"
                               Children={FormBrand} child={true}/>,

                <CardContainer key="brandRegister" title="Editar fabricante"
                               info={
                                   <FormBrandDropDown />
                               }
                               Children={FormBrand} child={true} textInput={false}/>,

                <CardContainer key="brandRegister" title="Eliminar fabricante"
                               Children={FormBrand} child={true}/>,
            ]
        } />
    )
}

export default memo(BrandSettings)