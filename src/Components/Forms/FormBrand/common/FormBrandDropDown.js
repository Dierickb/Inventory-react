import {DropDown} from "../../../layout";
import {useBrand} from "../../../../contexts";
import {useEffect} from "react";

const FormBrandDropDown = ({defaultValue, showNewFirst, ...rest}) => {

    const {state: {brands}, getBrands} = useBrand()

    useEffect(() => {
        getBrands()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <DropDown defaultValue={!!defaultValue?.brand ? defaultValue.brand : ""} name="brands" wd={rest.wd}
                required>
          { (!showNewFirst || showNewFirst===undefined) && <option value="">Seleccione un fabricante</option> }
          {
            brands?.map(brand=><option key={brand} value={brand}>{brand}</option>)
          }
        </DropDown>      
    )
}

export default FormBrandDropDown