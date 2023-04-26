import CardsContainer from "../../Card/CardsContainer";
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

                <CardContainer key="brandEdit" title="Editar fabricante"
                               info={
                                   <FormBrandDropDown />
                               }
                               Children={FormBrand} child={true} textInput={false}/>,

                <CardContainer key="brandDelete" title="Eliminar fabricante"
                               info={
                                   <FormBrandDropDown />
                               }
                               Children={FormBrand} child={true} textInput={false}/>,
            ]
        } />
    )
}

export default memo(BrandSettings)