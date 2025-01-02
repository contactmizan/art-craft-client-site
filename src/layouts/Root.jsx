import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto my-5">
     
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />

      <h1 className="text-3xl font-bold">Welcome to Art & Craft</h1>
      
      <Outlet />
    </div>
  );
};

export default Root;
