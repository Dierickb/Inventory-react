import {customersOperations, internOperation} from "../utils/testData";

export const ipcOperations = () => {
    const getIpcCustomersOperations = () => {
        return customersOperations
    }

    const getIpcInternOperations = () => {
        return internOperation
    }

    return {
        getIpcCustomersOperations,
        getIpcInternOperations
    }
}