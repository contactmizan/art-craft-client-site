import Banner from "./shared/Banner";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-6">
                <Banner></Banner>
            </div>
            <div className="mt-6">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Home;