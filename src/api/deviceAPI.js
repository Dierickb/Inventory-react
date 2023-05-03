import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import {firestore} from "../utils";

export const deviceAPI = () => {
    const getDevicesAPI = async () => {
        const docRef = doc(firestore, `bootCenterDevice/F4y1CG4kfa80VivueVkL`)
        const docEncrypted = await getDoc(docRef)
        return docEncrypted.data()
    }

    const getDeviceInfoAPI = async () => {
        const docRef2 = await getDocs(collection(firestore, "bootCenterDevice"))
        const docEncrypted = docRef2.docs

        return docEncrypted.map((doc) => {
            return {
                id: doc.id,
                data: doc.data()
            }
        })
    }

    const setDeviceAPI = async (brand, product, model, businesses, serial) => {
        console.log(brand)
        // enviar data a la api
    }

    const findDeviceAPI = async (serial) => {

    }

    const updateDeviceAPI = async (serial) => {

    }

    const deleteDeviceAPI = async () => {

    }

    return {getDevicesAPI, getDeviceInfoAPI, setDeviceAPI, findDeviceAPI, updateDeviceAPI, deleteDeviceAPI}

}