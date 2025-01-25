import Footer from "./shared/Footer";


const MyItemList = () => {
    return (
        <div>
            <h2 className="text-3xl">My Item List</h2>

            {/* footer */}
            <div className="mt-6">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default MyItemList;