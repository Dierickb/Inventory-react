import {DropDown, InputsContainer} from "../../../layout";
import {useState} from "react";
import {useBrand} from "../../../../contexts";
import {useFetch} from "../hooks/useFetch";

const FormDeviceSelect = ({defaultValue}) => {
    const [brand, setBrand] = useState("")
    const [typeDevice, setTypeDevice] = useState("")
    const {state} = useBrand()
    const {fetchGetModelsByBrands} = useFetch()

  return (
      <>
          <InputsContainer pd='5px'>
              <DropDown defaultValue={!!defaultValue?.brand ? defaultValue.brand : ""} name="brand"
                        onChange={(e) => {
                            setBrand(e.target.value)
                            fetchGetModelsByBrands(e.target.value,typeDevice)
                        }}
                        required>
                  <option value="">Fabricante</option>
                  {state.brands?.map(brand=>
                      <option key={brand} value={brand}>{brand}</option>
                  )}
              </DropDown>
          </InputsContainer>

          <InputsContainer pd='5px'>
              <DropDown defaultValue={!!defaultValue?.product ? defaultValue.product : ""} name="product"
                        onChange={(e) => {
                            setTypeDevice(e.target.value)
                            fetchGetModelsByBrands(brand, e.target.value)
                        }}
                        required>
                  <option value="">Product</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Desktop">Desktop</option>
              </DropDown>
          </InputsContainer>

          <InputsContainer pd='5px'>
              <DropDown defaultValue={!!defaultValue?.model ? defaultValue.model : state?.modelsByBrand[0]}
                        name="model" required>
                  {
                      (state.modelsByBrand.length < 1) ? <option value="">Model</option> :
                          state.modelsByBrand?.map(model=>
                              <option key={model} value={model}>{model}</option>
                          )}
              </DropDown>
          </InputsContainer>
      </>
  )
}

export default FormDeviceSelect