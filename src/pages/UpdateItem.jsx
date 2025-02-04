import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const UpdateItem = () => {
    const { id } = useParams(); // Get the item ID from URL params
    const navigate = useNavigate();
    const [item, setItem] = useState({});
    const [formData, setFormData] = useState({
        photo: "",
        item: "",
        subcategory: "",
        description: "",
        price: "",
        rating: "",
        customization: "",
        processTime: "",
        stock: "",
    });

    // Fetch item data on component load
    useEffect(() => {
        fetch(`http://localhost:5000/artCraft/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setItem(data);
                setFormData({
                    photo: data.photo,
                    item: data.item,
                    subcategory: data.subcategory,
                    description: data.description,
                    price: data.price,
                    rating: data.rating,
                    customization: data.customization,
                    processTime: data.processTime,
                    stock: data.stock,
                });
            })
            .catch((error) => console.error("Error fetching item:", error));
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Update the item on the backend
        fetch(`http://localhost:5000/artCraft/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then(() => {
                alert("Item updated successfully!");
                navigate(`/viewdetails/${id}`); // Redirect to view the updated item
            })
            .catch((error) => {
                alert("Error updating item.");
                console.error("Error updating item:", error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-3xl mx-auto p-6 my-4 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800">Update Item</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="item"
                        value={formData.item}
                        onChange={handleChange}
                        placeholder="Item Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        name="subcategory"
                        value={formData.subcategory}
                        onChange={handleChange}
                        placeholder="Subcategory"
                        className="input input-bordered w-full"
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="textarea textarea-bordered w-full"
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        placeholder="Rating"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        name="customization"
                        value={formData.customization}
                        onChange={handleChange}
                        placeholder="Customization"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        name="processTime"
                        value={formData.processTime}
                        onChange={handleChange}
                        placeholder="Processing Time"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        placeholder="Stock"
                        className="input input-bordered w-full"
                    />
                    <button type="submit" className="btn btn-primary">Update Item</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default UpdateItem;
