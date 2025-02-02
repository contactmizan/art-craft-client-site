import { createContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithPopup,
    updateProfile,
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // Persist user on reload
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // Stop loading after user is determined
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    // Create a new user with email, password, name, and photoURL
    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const createdUser = userCredential.user;

                console.log("User created:", createdUser); // Debug

                // Update profile with name and photo
                return updateProfile(createdUser, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {
                    console.log("Profile updated:", createdUser);
                    setUser({
                        ...createdUser,
                        displayName: name,
                        photoURL: photoURL,
                    });
                });
            })
            .catch((error) => {
                console.error("Error creating user:", error);
                alert(`Error: ${error.message}`);
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
            alert(`Error: ${error.message}`);
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

            console.log("User signed in with GitHub:", user);

            // Update user state
            setUser(user);
        } catch (error) {
            console.error("Error during GitHub sign-in:", error);
            alert(`Error: ${error.message}`);
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
        signIn,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
