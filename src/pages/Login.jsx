import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { FaGoogle } from "react-icons/fa";

const Login = () => {

const handleLogin =e=>{
    e.preventDefault();
    console.log(e.currentTurget);
}
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero  min-h-screen">
                <div className=" ">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Login Please</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-3">
                        <form onClick={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            {/* Google popup login */}
                            <div className="text-center">
                                <h2>or</h2>
                                <button className="
                            btn btn-primary"><FaGoogle className="text-3xl mr-2" /> Google Login</button>
                            </div>

                            <label className="label">
                                <p>Don't have an account? Please <Link to="/register" className=" hover:underline text-blue-700">Register</Link></p>
                            </label>
                            <div className="form-control">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;