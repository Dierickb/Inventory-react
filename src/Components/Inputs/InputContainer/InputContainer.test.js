import InputContainer from "./InputContainer";
import {render} from "@testing-library/react";

test('renders content', () => {
  const inputContainer = {placeHolder: "Serial", title: "Serial", name: "Serial", defaultValue: "Serial"}

  const component = render(
      <InputContainer {...inputContainer} />
  )

    component.getByText('Serial')
    component.getByPlaceholderText('Serial')

})