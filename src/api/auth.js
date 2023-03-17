import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {doc, getDoc, setDoc} from 'firebase/firestore'
import {firestore, initFirebase} from "../utils";

export const auth = () => {
    const register = async (email, password, rol) => {
      try{
          const auth = getAuth(initFirebase)
          const userFirebase = await createUserWithEmailAndPassword(auth, email, password)
          const docRef = doc(firestore, `user/${userFirebase.user.uid}`)

          await setDoc(docRef, {email: email, rol: rol})
      } catch (e) {
          throw e;
      }
    }

    const logout = async ( ) => {
        try {
            const auth = getAuth()
            await signOut(auth)
            localStorage.removeItem("auth")
        } catch (e) {
            throw e
        }
    }

    const login = async (email, password) => {
        try {
            const auth = getAuth(initFirebase)
            const {user : {email: emailFirebase, uid: uidFirebase}} = await signInWithEmailAndPassword(auth, email, password)
            const rolFirebase = await getRol(uidFirebase)
            return [emailFirebase, uidFirebase, rolFirebase.rol]
        } catch (e) {
            throw e
        }
    }

    const getRol = async (uidFirebase) => {
        const docRef = doc(firestore, `user/${uidFirebase}`)
        const docEncrypted = await getDoc(docRef)
        return docEncrypted.data()
    }

    return {register, logout, login}
}
