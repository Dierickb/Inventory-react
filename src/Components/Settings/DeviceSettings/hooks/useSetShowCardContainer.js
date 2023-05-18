import {useEffect, useState} from "react";

export const useSetShowCardContainer = () => {
    const [showDeviceRegister, setShowDeviceRegister] = useState(false)
    const [showDeviceEdit, setShowDeviceEdit] = useState(false)
    const [showDeviceDelete, setShowDeviceDelete] = useState(false)

    useEffect(() => {
        if(showDeviceRegister) {
            setShowDeviceEdit(false)
            setShowDeviceDelete(false)
        }
    }, [showDeviceRegister])

    useEffect(() => {
        if(showDeviceEdit) {
            setShowDeviceRegister(false)
            setShowDeviceDelete(false)
        }
    }, [showDeviceEdit])

    useEffect(() => {
        if(showDeviceDelete) {
            setShowDeviceEdit(false)
            setShowDeviceRegister(false)
        }
    }, [showDeviceDelete])

    return {
        showDeviceRegister, showDeviceEdit, showDeviceDelete,
        setShowDeviceRegister, setShowDeviceEdit, setShowDeviceDelete
    }

}