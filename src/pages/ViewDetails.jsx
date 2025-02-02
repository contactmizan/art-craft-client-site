
import { useParams, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const { id } = useParams(); // Get ID from URL
    const item = useLoaderData(); // Load item from route loader

   

    return (
        <div className="container mx-auto p-5">
            <p>{id}</p>
            <figure>
                <img className="w-72 h-48 object-cover rounded-md"
                    src={item.photo} alt='' />
            </figure>
            <h2>{item.customization}</h2>
        </div>
    );
};

export default ViewDetails;
