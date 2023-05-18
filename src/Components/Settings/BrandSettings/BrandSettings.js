import CardsContainer from "../../Card/CardsContainer";
import FormBrand from "../../Forms/FormBrand";
import {memo} from "react";
import CardContainer from "../../Card/CardContainer";
import FormBrandDropDown from "../../Forms/FormDevice/common/FormBrandDropDown";

const BrandSettings = () => {
    return (
        <CardsContainer title="Brand Settings">
            <CardContainer title="Registrar fabricante"
                           Children={FormBrand} child={true}/>

            <CardContainer title="Editar fabricante"
                           info={
                               <FormBrandDropDown />
                           }
                           Children={FormBrand} child={true} textInput={false}/>

            <CardContainer title="Eliminar fabricante"
                           info={
                               <FormBrandDropDown />
                           }
                           Children={FormBrand} child={true} textInput={false}/>
        </CardsContainer>
    )
}

export default memo(BrandSettings)