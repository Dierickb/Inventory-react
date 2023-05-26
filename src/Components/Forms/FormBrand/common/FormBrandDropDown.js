import {DropDown} from "../../../layout";
import {useBrand} from "../../../../contexts";
import {useEffect} from "react";

const FormBrandDropDown = ({defaultValue}) => {

    const {state, getBrands} = useBrand()

    useEffect(() => {
        getBrands()
    },[])

    return (
        <DropDown defaultValue={!!defaultValue?.brand ? defaultValue.brand : ""} name="brand" wd="187.2px"
                required>
          <option value="">Fabricante</option>
          {state.brands?.map(brand=>
              <option key={brand} value={brand}>{brand}</option>
          )}
        </DropDown>
    )
}

export default FormBrandDropDown