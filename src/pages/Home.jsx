import { useLoaderData } from "react-router-dom";
import Banner from "./shared/Banner";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import ArtCraftCard from "./ArtCraftCard";


const Home = () => {

    const artCrafts = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-6">
                <Banner></Banner>
            </div>
            <h1>Art Craft Items: {artCrafts.length}</h1>
            {
                artCrafts.map(artCraft => <ArtCraftCard key={artCraft._id}
                    artCraft={artCraft}></ArtCraftCard>)
            }
            <div className="mt-6">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Home;