import {useReducer} from "react";
import {useFetch} from "./hooks/useFetch";
import {formDeviceSelect, formDeviceSelectInitialState} from "../../../../../reducers/formDeviceSelect";
import {useFormDeviceSelect} from "./hooks/useFormDeviceSelect";
import DropDownBrand from "./DropDownBrands";
import DropDownProduct from "./DropDownProduct";
import DropDownModels from "./DropDownModels";

const FormDeviceSelect = ({defaultValue, dropDownDisabled}) => {
    const [state, dispatch] = useReducer(formDeviceSelect, formDeviceSelectInitialState)
    const {state: brandState, fetchGetModelsByBrands} = useFetch()

    useFormDeviceSelect({dispatch, fetchGetModelsByBrands, state, defaultValue})

  return (
      <>
          <DropDownBrand {...{...defaultValue, dropDownDisabled, dispatch, ...brandState}} />

          <DropDownProduct {...{...defaultValue, dropDownDisabled, dispatch, ...brandState}} />

          <DropDownModels {...{...defaultValue, dropDownDisabled, dispatch, ...brandState}} />
      </>
  )
}

export default FormDeviceSelect