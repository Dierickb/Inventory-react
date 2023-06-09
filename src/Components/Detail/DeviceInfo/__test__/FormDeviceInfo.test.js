import {render} from "./test-utils"
import {act} from "react-dom/test-utils";
import FormDeviceInfo from "../FormDeviceInfo";
import {device1, device2} from "../../mocks";

describe('render FormDeviceInfo Correctly', () => {

    it('render Correctly withOutDevice', async () => {
        let renderer;

        await act(async () => {
            renderer = await render(
                <FormDeviceInfo />
            )
        })

        const formElement = renderer.getByRole("search")
        const inputsElements = renderer.getAllByRole("textbox")
        const selectsElements = renderer.getAllByRole("combobox")
        const imageOptionElement = renderer.getByRole("option", {
            name: "Imagen"
        })
        const interOperationOptionElement = renderer.getByRole("option", {
            name: "Operacion Interna"
        })

        const inputScotiaId = renderer.getByPlaceholderText("ScotiaId")
        const inputName = renderer.getByPlaceholderText("Nombre")

        expect(formElement).toBeInTheDocument()
        expect(inputsElements.length).toBe(2)
        expect(selectsElements.length).toBe(2)
        expect(inputScotiaId).toBeInTheDocument()
        expect(inputName).toBeInTheDocument()

        expect(imageOptionElement.selected).toBe(true)
        expect(interOperationOptionElement.selected).toBe(true)

    })
    it('render Correctly with device1 prop', async () => {
        let renderer;

        await act(async () => {
            renderer = await render(
                <FormDeviceInfo device={device1} />
            )
        })

        const imageOptionElement = renderer.getByRole("option", {
            name: (!device1?.image) ? "Imagen" : device1?.image
        })
        const internOperationOptionElement = renderer.getByRole("option", {
            name: (!device1?.internOperation) ? "Operacion Interna" : device1?.internOperation
        })
        expect(imageOptionElement.selected).toBe(true)
        expect(internOperationOptionElement.selected).toBe(true)

    })
    it('render Correctly with device2 prop', async () => {
        let renderer;

        await act(async () => {
            renderer = await render(
                <FormDeviceInfo device={device2} />
            )
        })

        const imageOptionElement = renderer.getByRole("option", {
            name: (!device2?.image) ? "Imagen" : device2?.image
        })
        const internOperationOptionElement = renderer.getByRole("option", {
            name: (!device2?.internOperation) ? "Operacion Interna" : device2?.internOperation
        })

        expect(imageOptionElement.selected).toBe(true)
        expect(internOperationOptionElement.selected).toBe(true)
    })
})