import DeviceInfo from "../DeviceInfo";
import {render} from "./test-utils"
import {device1} from "../../mocks";
import {act} from "react-dom/test-utils";
import React from "react";
import {fireEvent} from "@testing-library/react";

describe('DeviceInfo', () => {
    it('render DeviceInfo Correctly', async () => {
        let renderer
        const cleanDeviceInfo = jest.fn()

        await act(async () => {
            renderer = await render(
                <DeviceInfo device={device1} cleanDeviceInfo={cleanDeviceInfo} />
            )
        })

        const headerElement = renderer.getByRole('banner')
        const footerElement = renderer.getByRole('contentinfo')

        expect(headerElement).toBeInTheDocument()
        expect(footerElement).toBeInTheDocument()

    })
    it('render DeviceInfo with emptyValues Correctly', async () => {
        let renderer
        const cleanDeviceInfo = jest.fn()

        await act(async () => {
            renderer = await render(
                <DeviceInfo cleanDeviceInfo={cleanDeviceInfo} />
            )
        })

        const headerElement = renderer.getByRole('banner')
        const footerElement = renderer.getByRole('contentinfo')

        expect(headerElement).toBeInTheDocument()
        expect(footerElement).toBeInTheDocument()

    })
    it('render DeviceInfo clean device', async () => {
        let renderer
        const cleanDeviceInfo = jest.fn()

        await act(async () => {
            renderer = await render(
                <DeviceInfo device={device1} cleanDeviceInfo={cleanDeviceInfo} />
            )
        })

        const buttonElement = renderer.getByRole('cleanButton')

        expect(buttonElement).toBeInTheDocument()

        fireEvent.click(buttonElement)
        expect(cleanDeviceInfo).toHaveBeenCalledTimes(1)

    })
})