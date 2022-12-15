import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // console.log({credential})
        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        return {
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        // console.log(resp);
        await updateProfile(FirebaseAuth.currentUser, { displayName })
        return {
            ok: true,
            photoURL,
            uid
        }
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL,displayName } = resp.user;

        return {
            ok: true,
            photoURL,
            displayName,
            uid
        }
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async()=>{
    return await FirebaseAuth.signOut();
}