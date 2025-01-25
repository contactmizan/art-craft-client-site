import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";


const AllItems = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl">All Items</h2>
            {/* footer */}
            <div className="mt-6">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default AllItems;