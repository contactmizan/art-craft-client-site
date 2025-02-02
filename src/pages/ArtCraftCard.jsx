
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const ArtCraftCard = ({ artCraft }) => {
    const { photo, item, subcategory, description, price, rating, customization, processTime, stock, email, name, _id } = artCraft;
    return (
        <div className="card card-compact bg-base-100 shadow-xl my-4">
            <figure>
                <img className="w-72 h-48 object-cover rounded-md"
                    src={photo} alt='' />
            </figure>
            <div className="card-body">
                <h1 className="card-title font-bold">{item}</h1>
                <h3 className='font-bold'>{subcategory}</h3>
                <p className="text-sm text-gray-500">{description.slice(0, 80)}...</p>
                <p className="font-bold text-lg text-green-600">Price: {price}</p>

                {/* Dynamic Star Rating */}
                <div className="flex items-center gap-1">
                    {[...Array(Math.round(rating))].map((_, i) => (
                        <CiStar key={i} className="text-yellow-400" />
                    ))}
                    <span>{rating}</span>
                </div>

                <h2>Customization: {customization}</h2>
                <h2>Process Time: {processTime}</h2>
                <h2>Stock: {stock}</h2>

                <div className="card-actions justify-end">
                    <Link to={`/viewdetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ArtCraftCard;