
import { CiStar } from "react-icons/ci";

const ArtCraftCard = ({ artCraft }) => {
    const { photo, item, subcategory, description, price, rating, customization, processTime, stock, email, name } = artCraft;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl my-4">
            <figure>
                <img className="w-64 h-48"
                    src={photo} alt='' />
            </figure>
            <div className="card-body">
                <h1 className="card-title font-bold">{item}</h1>
                <h3 className='font-bold'>{subcategory}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <p className="flex items-center gap-1"><CiStar />{rating}</p>
                <h2>Customization: {customization}</h2>
                <h2>Process Time: {processTime}</h2>
                <h2>Stock: {stock}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
}

export default ArtCraftCard;