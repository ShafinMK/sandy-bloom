import initializeAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";




initializeAuthentication();


const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState('');

    const signInwithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false);
        })
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => { setIsLoading(false) });
    }
    return {
        user, isLoading, signInwithGoogle, logOut
    };

}

export default useFirebase;