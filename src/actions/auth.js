import {firebase, googleAuthProvider} from '../firebase/firebase';
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});
export const loginWithGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

// export const signUp = (email, password) => {
//     return () => {
//         return firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
//             console.log(error.message);
//         });
//     }
// }

// export const signIn = (email, password) => {
//     return () => {
//         return firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
//             console.log(error.message);
//         });
//     }
// }
