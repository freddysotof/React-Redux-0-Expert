export const initialState={
    status: 'checking', // 'checking', 'not-authenticated' , 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authenticatedState={
    uid: "123ABc",
    email: "demo@elcatador.com",
    displayName: "Demo User",
    photoURL: "https://demo.jpg",
    errorMessage:null
}

export const notAuthenticatedState={
    status: 'not-authenticated', // 'checking', 'not-authenticated' , 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const demoUser={
    uid: "123ABc",
    email: "demo@elcatador.com",
    displayName: "Demo User",
    photoURL: "https://demo.jpg",
}
