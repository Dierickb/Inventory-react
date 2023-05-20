import {DropDown, InputsContainer} from "../../../../layout";
import {FORM_DEVICE_SELECT_ACTIONS} from "../../../../../actions";
import {memo} from "react";

const DropDownBrands = ({brand: defaultBrand, dropDownDisabled, dispatch, brands}) => {

  return (
      <InputsContainer pd='5px'>
          <DropDown key={defaultBrand} defaultValue={defaultBrand} name="brand"
                    disabled={dropDownDisabled}
                    onChange={(e) => dispatch({
                        type: FORM_DEVICE_SELECT_ACTIONS.SET_BRAND,
                        payload: {brand: e.target.value}
                    })}
                    required>

              <option value="">Fabricante</option>
              {brands?.map(brand=>
                  <option key={brand} value={brand}>{brand}</option>
              )}
          </DropDown>
      </InputsContainer>
  )
}

export default memo(DropDownBrands)