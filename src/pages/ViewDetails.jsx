import { useLoaderData } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const ViewDetails = () => {
    const item = useLoaderData(); // Fetch data from loader
    console.log("Fetched Item:", item);

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-3xl mx-auto p-6 my-4 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800">{item.item}</h2>
                <img src={item.photo} alt={item.item} className="w-full h-80 object-cover mt-4 rounded-lg" />
                <p className="text-gray-600 mt-2"><strong>Subcategory:</strong> {item.subcategory}</p>
                <p className="text-gray-600"><strong>Price:</strong> ${item.price}</p>
                <p className="text-gray-600"><strong>Rating:</strong> {item.rating}⭐</p>
                <p className="text-gray-600"><strong>Customization Available:</strong> {item.customization}</p>
                <p className="text-gray-600"><strong>Processing Time:</strong> {item.processTime} days</p>
                <p className="text-gray-600"><strong>Stock Status:</strong> {item.stock}</p>
                <p className="text-gray-700 mt-4">{item.description}</p>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ViewDetails;
