import ArtCraftCard from "./ArtCraftCard";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { useLoaderData } from "react-router-dom";

const AllItems = () => {
    const artCrafts = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl">All Items</h2>

            <div className="">
                <h1 className="text-4xl text-center my-7">Art Craft Items: {artCrafts.length}</h1>
                <div className="grid md:grid-cols-2 gap-4">
                    {
                        artCrafts.map(artCraft => <ArtCraftCard key={artCraft._id}
                            artCraft={artCraft}></ArtCraftCard>)
                    }
                </div>
            </div>

            {/* footer */}
            <div className="mt-6">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default AllItems;