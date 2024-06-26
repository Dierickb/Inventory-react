import CardsContainer from "../../Card/CardsContainer";
import FormBrand from "../../Forms/FormBrand";
import FormSetBrand from "../../Forms/FormBrand/FormSetBrand"
import {memo} from "react";
import CardContainer from "../../Card/CardContainer";
import FormBrandDropDown from "../../Forms/FormBrand/common/FormBrandDropDown";
import FormSetProducts from "../../Forms/FormBrand/FormSetProducts/FormSetProducts";

const BrandSettings = () => {
    return (
        <CardsContainer title="Brand Settings">
            <CardContainer title="Registrar fabricante"
                           Children={FormSetBrand} child={true}/>

            <CardContainer title="Agregar producto"
                            info={ <FormBrandDropDown wd="auto" /> }
                           Children={FormSetProducts} child={true} textInput={false}/>

            <CardContainer title="Editar fabricante"
                           info={
                               <FormBrandDropDown wd="auto" />
                           }
                           Children={FormBrand} child={true} textInput={false}/>

            <CardContainer title="Eliminar fabricante"
                           info={
                               <FormBrandDropDown wd="auto" />
                           }
                           Children={FormBrand} child={true} textInput={false}/>
        </CardsContainer>
    )
}

export default memo(BrandSettings)