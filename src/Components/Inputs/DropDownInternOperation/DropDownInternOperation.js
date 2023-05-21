import DropDownContainer from "../../Nav/DropDownContainer";

const DropDownInternOperation = ({internOperation, display, mgLeft, padding, mgLSelect, hgSelect, ...rest}) => {

    const internOperations = [
        "Operacion Interna",
        "IT Delivery",
        "IT Support",
    ]

  return (
      <DropDownContainer title="Operacion Interna" key={internOperation ? "internOperation" : internOperation }
                         values={internOperations}
                         name="imageSelect"
                         defaultValue={internOperation}
                         display={display}
                         mgLeft={mgLeft}
                         mgLSelect={mgLSelect}
                         padding={padding}
                         hgSelect={hgSelect}
                         {...rest}
      />
  )
}

export default DropDownInternOperation