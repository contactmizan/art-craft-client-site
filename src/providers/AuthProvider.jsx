import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const createdUser = userCredential.user;

                // Log the complete UserImpl object
                console.log(createdUser);

                // Update profile with name and photo
                return updateProfile(createdUser, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {
                    console.log("UserImpl object after profile update:", createdUser);
                    setUser({
                        ...createdUser,
                        displayName: name,
                        photoURL: photoURL,
                    });
                });
            })
            .catch((error) => {
                console.error("Error creating user:", error);
            })
            .finally(() => setLoading(false));
    };

    // google sign in method
    const signInWithGoogle= async()=>{
        const provider=new GoogleAuthProvider();
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, provider);  // Use await here
            const user = result.user;
            console.log('User signed in with Google:', user);
            setUser(user);  // Update the user state
        } catch (error) {
            console.error('Error during Google sign-in:', error.message);
        } finally {
            setLoading(false);
        }
    };


    const authInfo = {
        user,
        loading,
        createUser,
        signInWithGoogle
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
