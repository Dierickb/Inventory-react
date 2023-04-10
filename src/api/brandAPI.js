import {collection, doc, getDoc, getDocs, setDoc} from 'firebase/firestore'
import {firestore} from "../utils";

export const brandAPI = () => {
    const getBrand = async () => {
        try{
            const docRef = await getDocs(collection(firestore, "brand"))
            const docEncrypted = docRef.docs
            return docEncrypted.map((doc) => {
                return {
                    id: doc.id,
                    data: doc.data()
                }
            })
        } catch (e) {
            throw e;
        }
    }

    const getModelsByBrandAPI = async(brandToFind) => {
        try {
            const brands = await getBrand()
            return brands.filter(brand => {
                if(brand.id === brandToFind) return brand
            })
        } catch (e) {
            throw e
        }
    }

    return {getBrand, getModelsByBrandAPI}
}
