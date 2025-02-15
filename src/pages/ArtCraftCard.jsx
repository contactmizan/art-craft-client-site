
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ArtCraftCard = ({ artCraft, artCrafts, setArtCrafts }) => {

    const { photo, item, subcategory, description, price, rating, customization, processTime, stock, email, name, _id } = artCraft;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(` https://art-craft-server-site.vercel.app/artCraft/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            //delete houar sathe sathe jeno remove hoy
                            const remaining = artCrafts.filter(craft => craft._id !== _id);
                            setArtCrafts(remaining);
                        }
                    })
            }
        });
    }

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

                <div className="card-actions justify-end my-2">
                    <Link to={`/viewdetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                    <Link to={`/updateitem/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>
                    <Link >
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default ArtCraftCard;