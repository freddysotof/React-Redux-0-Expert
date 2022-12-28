import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseCloudStore } from "../../../src/firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, startNewNote } from "../../../src/store/journal";

describe('Pruebas en Journal Thunks', () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    beforeEach(() => jest.clearAllMocks())

    test('startNewNote debe de crear una nueva nota en blanco ', async () => {

        const uid = 'TEST-UID'
        getState.mockReturnValue({ auth: { uid } });
        await startNewNote()(dispatch, getState)
        expect(dispatch).toHaveBeenCalledWith(savingNewNote())
        // expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
        //     body: '',
        //     title: '',
        //     id: expect.any(String),
        //     date: expect.any(Number)
        // }));
        // expect(dispatch).toHaveBeenCalledWith(setActiveNote({
        //     body: '',
        //     title: '',
        //     id: expect.any(String),
        //     date: expect.any(Number),
        //     // imageUrls: expect.any(Array)
        // }))


        // Borrar de firebase

        const collectionRef = collection(FirebaseCloudStore, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);
        console.log(docs)
        const deletePromises = [];
        docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)));

        await Promise.all(deletePromises);
    });

})