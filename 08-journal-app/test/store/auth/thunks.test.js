import { signInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../../src/firebase/providers"
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks"
import { clearNotesAfterLogout } from "../../../src/store/journal"
import { demoUser } from "../../fixtures/authFixtures"

jest.mock('../../../src/firebase/providers')
describe('Pruebas en AuthThunks', () => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks())

    test('debe de invocar el checkingCredentials', async () => {

        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    })


    test('startGoogleSignIn debe de invocar el checkingCredentials y login - Exito', async () => {
        const loginData = {
            ok: true,
            ...demoUser,
        }
        await signInWithGoogle.mockResolvedValue(loginData);


        await startGoogleSignIn()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    })

    test('startGoogleSignIn debe de invocar el checkingCredentials y logout - Error', async () => {
        const loginData = {
            ok: false,
            errorMessage: 'Un error en Google',
        }
        await signInWithGoogle.mockResolvedValue(loginData);


        await startGoogleSignIn()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData));
    })

    test('startLoginWithEmailPassword debe de invocar el checkingCredentials y login - Exito', async () => {
        const loginData = {ok: true,...demoUser}
        const formData = { email: demoUser.email, password: '123456' };
        await loginWithEmailPassword.mockResolvedValue(loginData);
    
        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    })

    test('startLoginWithEmailPassword debe de invocar el checkingCredentials y logout - Error', async () => {
        const loginData = {
            ok: false,
            ...demoUser,
        }
        const formData = { email: demoUser.email, password: '123456' };
        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout({}));
    })

    test('startLogout debe de invocar logoutFireabse, clearNotes y logout', async () => {
        await startLogout()(dispatch);
        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesAfterLogout());
        expect(dispatch).toHaveBeenCalledWith(logout({}));
    })


})