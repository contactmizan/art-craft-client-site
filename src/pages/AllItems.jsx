import { useState } from "react";
import ArtCraftCard from "./ArtCraftCard";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { useLoaderData } from "react-router-dom";

const AllItems = () => {
    const loadedArtCrafts = useLoaderData();
    const [artCrafts, setArtCrafts] = useState(loadedArtCrafts)
    if (!artCrafts.length) {
        return <h2 className="text-center text-xl text-blue-600 my-10">Loading items...</h2>;
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl">All Items</h2>

            <div className="">
                <h1 className="text-4xl text-center my-7">Art Craft Items: {artCrafts.length}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        artCrafts.map(artCraft => <ArtCraftCard key={artCraft._id}
                            artCrafts={artCrafts}
                            setArtCrafts={setArtCrafts}
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