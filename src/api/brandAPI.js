import {collection, getDocs} from 'firebase/firestore'
import {firestore} from "../utils";

export const brandAPI = () => {
    const getBrandAPI = async () => {
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
            const brands = await getBrandAPI()
            return brands.filter(brand => (brand.id === brandToFind) && brand)
        } catch (e) {
            throw e
        }
    }

    return {getBrandAPI, getModelsByBrandAPI}
}
