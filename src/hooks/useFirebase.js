import initializeAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";




initializeAuthentication();


const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState({});
    // const [error, setError] = useState('');

    const signInwithGoogle = () => {
       return signInWithPopup(auth, googleProvider);
            
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, []);

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        });
    }
    return {
        user, signInwithGoogle, logOut
    };

}

export default useFirebase;