import {businesses} from "../utils/testData";

export const ipcBusiness = () => {
    const getIpcBusiness = () => {
        return businesses
    }

    return {
        getIpcBusiness
    }
}