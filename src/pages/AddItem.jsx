import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Swal from 'sweetalert2';

const AddItem = () => {

    const handleAddItem = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const item = form.item.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processTime = form.processTime.value;
        const stock = form.stock.value;
        const email = form.email.value;
        const name = form.name.value;

        const newItem = { photo, item, subcategory, description, price, rating, customization, processTime, stock, email, name }
        console.log(newItem);

        //send dATA to the server
        fetch('http://localhost:5000/artCraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl font-extrabold my-4">Add Craft Item</h2>

            {/* form */}
            <form onSubmit={handleAddItem} className="bg-[#F4F3F0] p-24">
                {/* form photo url row */}
                <div className="mb-4">
                    <div className="form-control w-fill">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter Image URL" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* form item-name-sub cat row */}
                <div className="md:flex gap-2 items-center mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="item" placeholder="Enter Item Name" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Subcategory</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory" placeholder="Enter subcategory Name" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* form description & price  row */}
                <div className="md:flex gap-2 items-center mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="write a short description" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Enter item price" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* form rating & customi.. row */}
                <div className="md:flex gap-2 items-center mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Item rating" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" placeholder="yes or no" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* form process time & stocks row */}
                <div className="md:flex gap-2 items-center mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Process Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processTime" placeholder="Approx time to prepare" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stock" placeholder="" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* form email & name row */}
                <div className="md:flex gap-2
                ">
                    <div className="form-control md:w-1/2 mb-4">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="Enter Your Email" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Your Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>

                <div>
                    <input type="submit" className="btn btn-block bg-gray-400" value="Add Item" />
                </div>
            </form>

            {/* footer */}
            <div className="mt-6">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default AddItem;