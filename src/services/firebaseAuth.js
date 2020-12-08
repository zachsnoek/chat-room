import firebase from "firebase/app";
import "firebase/firebase-auth";

const loginWithGoogle = async () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    try {
        const {
            user: { uid, displayName },
        } = await firebase.auth().signInWithPopup(googleAuthProvider);

        return { uid: `google-${uid}`, displayName };
    } catch (error) {
        if (error.code !== "auth/popup-closed-by-user") {
            console.error(error);
        }
    }
};

export { loginWithGoogle };
