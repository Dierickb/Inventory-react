import {customersOperations, internOperation} from "../utils/testData";

export const ipcOperations = () => {
    const getIpcCustomersOperations = () => {
        return customersOperations
    }

    const getIpcInternOperations = async () => {
        return internOperation
    }

    return {
        getIpcCustomersOperations,
        getIpcInternOperations
    }
}