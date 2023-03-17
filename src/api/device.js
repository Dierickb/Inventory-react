import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import {firestore} from "../utils";

export const device = () => {
    const getDevices = async (uId) => {
        const docRef = doc(firestore, `bootCenterDevice/${uId}`)
        const docEncrypted = await getDoc(docRef)
        return docEncrypted.data()
    }

    const getDeviceInfo = async () => {
        const docRef2 = await getDocs(collection(firestore, "bootCenterDevice"))
        const docEncrypted = docRef2.docs

        return docEncrypted.map((doc) => {
            return {
                id: doc.id,
                data: doc.data()
            }
        })
    }

    const setDevice = async (info) => {

    }

    const findDevice = async (serial) => {

    }

    return {getDevices, getDeviceInfo, setDevice, findDevice}

}