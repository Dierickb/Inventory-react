import {internOperation} from "../utils/testData";

export const ipcInternOperation = () => {
    const getIpcInternOperations = () => {
        return internOperation
    }

    return {
        getIpcInternOperations
    }
}