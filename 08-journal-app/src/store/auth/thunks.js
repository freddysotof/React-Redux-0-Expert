import { signInWithGoogle,registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import { clearNotesAfterLogout } from "../journal";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, Password) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());


    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const resp = await signInWithGoogle();
        if (!resp.ok) return dispatch(logout(resp))

        dispatch(login(resp))
    }
}

export const startCreatingUserWithEmailPassword = ({email,password,displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const {ok,uid,photoURL,errorMessage} = await registerUserWithEmailPassword({email,password,displayName});
        // console.log(resp);
        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({uid,displayName,email,photoURL}))
    }
}   


export const startLoginWithEmailPassword = ({email,password}) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());
    
        const {ok,uid,displayName,photoURL,errorMessage} = await loginWithEmailPassword({email,password});
        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({uid,displayName,email,photoURL}))
    }
}   

export const startLogout = () => {
    return async (dispatch) => {
        try {
            await logoutFirebase();
            dispatch(clearNotesAfterLogout());
            dispatch(logout({}))
        } catch (error) {
            
        }
      
    }
}
