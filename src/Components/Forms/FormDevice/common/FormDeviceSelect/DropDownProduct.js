import {DropDown, InputsContainer} from "../../../../layout";
import {FORM_DEVICE_SELECT_ACTIONS} from "../../../../../actions";
import {memo} from "react";

const DropDownProduct = ({product: defaultProduct, dropDownDisabled, dispatch, products}) => {
  return (
      <InputsContainer pd='5px'>
          <DropDown key={defaultProduct} defaultValue={defaultProduct} name="product"
                    disabled={dropDownDisabled}
                    onChange={(e) => dispatch({
                        type: FORM_DEVICE_SELECT_ACTIONS.SET_PRODUCT,
                        payload: {product: e.target.value}
                    })}
                    required>
              <option value="">Product</option>
              {products?.map(product=>
                  <option key={product} value={product}>{product}</option>
              )}
          </DropDown>
      </InputsContainer>
  )
}

export default memo(DropDownProduct)