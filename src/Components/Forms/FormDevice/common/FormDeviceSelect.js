import {DropDown, InputsContainer} from "../../../layout";
import {useReducer} from "react";
import {useFetch} from "../hooks/useFetch";
import {formDeviceSelect, formDeviceSelectInitialState} from "../../../../reducers/formDeviceSelect";
import {FORM_DEVICE_SELECT_ACTIONS} from "../../../../actions";
import {useFormDeviceSelect} from "../hooks/useFormDeviceSelect";

const FormDeviceSelect = ({defaultValue, keyValue}) => {

    const [state, dispatch] = useReducer(formDeviceSelect, formDeviceSelectInitialState)
    const {state: brandState, fetchGetModelsByBrands} = useFetch()

    useFormDeviceSelect({dispatch, fetchGetModelsByBrands, state, defaultValue, keyValue})

  return (
      <>
          <InputsContainer pd='5px'>
              <DropDown key={defaultValue?.brand} defaultValue={defaultValue?.brand} name="brand"
                        onChange={(e) => dispatch({
                            type: FORM_DEVICE_SELECT_ACTIONS.SET_BRAND,
                            payload: {brand: e.target.value}
                        })}   required>

                  <option value="">Fabricante</option>
                  {brandState.brands?.map(brand=>
                      <option key={brand} value={brand}>{brand}</option>
                  )}
              </DropDown>
          </InputsContainer>

          <InputsContainer pd='5px'>
              <DropDown key={defaultValue?.product} defaultValue={defaultValue?.product} name="product"
                        onChange={(e) => dispatch({
                            type: FORM_DEVICE_SELECT_ACTIONS.SET_PRODUCT,
                            payload: {product: e.target.value}
                        })}
                        required>
                  <option value="">Product</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Desktop">Desktop</option>
              </DropDown>
          </InputsContainer>

          <InputsContainer pd='5px'>
              <DropDown key={defaultValue?.serial}  defaultValue={defaultValue?.model}
                        name="model" required>
                  {
                      !!defaultValue?.model &&
                      <option key={defaultValue?.model} value={defaultValue?.model}>{defaultValue?.model}</option>
                  }

                  {
                      brandState.modelsByBrand?.map(model => {
                          if(model !== defaultValue?.model)
                              return <option key={model} value={model}>{model}</option>
                          }
                      )
                  }
              </DropDown>
          </InputsContainer>
      </>
  )
}

export default FormDeviceSelect