import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Navbar from './shared/Navbar';

const Register = () => {
    const { createUser, loading } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Validate Password
        const passwordValidation = (password) => {
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const isLongEnough = password.length >= 6;

            if (!hasUpperCase) {
                toast.error("Password must contain at least one uppercase letter.");
                return false;
            }
            if (!hasLowerCase) {
                toast.error("Password must contain at least one lowercase letter.");
                return false;
            }
            if (!isLongEnough) {
                toast.error("Password must be at least 6 characters long.");
                return false;
            }
            return true;
        };

        if (!passwordValidation(password)) {
            return; 
        }

        // Create user with name, email, photo, and password
        createUser(email, password, name, photo)
            .then(() => {
                toast.success("Registration successful! You can now log in.");
                form.reset();
            })
            .catch((error) => {
                console.error("Error during registration:", error);
                toast.error(`Error: ${error.message}`);
            });
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen">
                <div>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Register Please</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-3">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
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
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Photo URL"
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
                                <label className="label">
                                    <p>
                                        Already have an account? Please{" "}
                                        <Link className="hover:underline text-blue-700" to="/login">
                                            Login
                                        </Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
