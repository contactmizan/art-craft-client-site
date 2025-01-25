import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "./shared/Footer";

const Login = () => {
    const { signInWithGoogle, user, signInWithGitHub } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log("Email:", email, "Password:", password);
        // Add email/password login logic here if required
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle(); // Call Google Sign-in
            console.log("Google sign-in successful");
        } catch (error) {
            console.error("Google Sign-in Error:", error.message);
        }
    };

    const handleGitHubSignIn = async () => {
        try {
            await signInWithGitHub();
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.error("GitHub Sign-in Error:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen">
                <div>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Login Please</h1>
                        {user && <p className="text-green-500">Welcome back, {user.displayName || "User"}!</p>}
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-3">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            {/* Google popup login */}
                            <div className="text-center ">
                                <h2>or</h2>
                                <button
                                    onClick={handleGoogleSignIn}
                                    type="button"
                                    className="btn btn-primary gap-2"
                                >
                                    <FaGoogle className="text-2xl" />
                                    Sign in with Google
                                </button>
                            </div>

                            {/* github login */}
                            <div className="space-y-2 text-center flex flex-col items-center mb-2">
                                <h2>or</h2>
                                <button className="btn" onClick={handleGitHubSignIn}>
                                    <FaGithub className="text-3xl" />
                                </button>
                            </div>

                            <label className="label">
                                <p>
                                    Don't have an account? Please{" "}
                                    <Link to="/register" className="hover:underline text-blue-700">
                                        Register
                                    </Link>
                                </p>
                            </label>
                            <div className="form-control">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Login;
