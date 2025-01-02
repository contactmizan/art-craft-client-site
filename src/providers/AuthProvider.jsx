import { createContext, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithPopup,
    updateProfile,
    GoogleAuthProvider,
    GithubAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create a new user with email, password, name, and photoURL
    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const createdUser = userCredential.user;

                console.log(createdUser); // Log UserImpl object

                // Update the profile with name and photo
                return updateProfile(createdUser, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {
                    console.log("User profile updated:", createdUser);
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

    // Google Sign-In Method
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, provider); 
            const signedInUser = result.user;

            console.log("User signed in with Google:", signedInUser);

            // Update user state
            setUser(signedInUser);
        } catch (error) {
            console.error("Error during Google sign-in:", error.message);
        } finally {
            setLoading(false);
        }
    };

     // GitHub Sign-In Method
     const signInWithGitHub = async () => {
        const provider = new GithubAuthProvider();
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('User signed in with GitHub:', user);
            setUser(user); // Update the user state
        } catch (error) {
            console.error('Error during GitHub sign-in:', error);
        } finally {
            setLoading(false);
        }
    };

    // Context value
    const authInfo = {
        user,
        loading,
        createUser,
        signInWithGoogle,
        signInWithGitHub,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
