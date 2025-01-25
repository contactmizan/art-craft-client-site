
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

            <div>
                 {/* Banner/Slider */}
                <section class="w-full bg-cover bg-center h-56 flex items-center justify-center text-white">
                    <h1 class="text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">Welcome to Craftify</h1>
                </section>
                {/*  */}
                <section id="categories" class="py-12 px-6 bg-white">
                    <h2 class="text-2xl font-bold text-center mb-8">Art & Craft Categories</h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="p-6 bg-blue-100 rounded-lg text-center">
                            <h3 class="font-semibold">Pottery</h3>
                        </div>
                        <div class="p-6 bg-pink-100 rounded-lg text-center">
                            <h3 class="font-semibold">Knitting</h3>
                        </div>
                        <div class="p-6 bg-yellow-100 rounded-lg text-center">
                            <h3 class="font-semibold">Jewelry</h3>
                        </div>
                        <div class="p-6 bg-green-100 rounded-lg text-center">
                            <h3 class="font-semibold">Woodwork</h3>
                        </div>
                    </div>
                </section>
                {/* Extra Section 1  */}
                <section class="py-12 px-6 bg-gray-200 my-20">
                    <h2 class="text-2xl font-bold text-center mb-8">Why Choose Us?</h2>
                    <p class="text-center max-w-2xl mx-auto text-gray-700">We bring you the best handcrafted items from local artisans, ensuring top-notch quality and unique designs for your home and lifestyle.</p>
                </section>

                {/* Extra Section 2 */}
                <section class="py-12 px-6 bg-gray-100">
                    <h2 class="text-2xl font-bold text-center mb-8">Customer Testimonials</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white shadow-lg rounded-lg p-6">
                            <p class="text-gray-700">"The quality of the items is unmatched! I love the unique designs."</p>
                            <p class="mt-2 text-sm text-gray-500">- Sarah</p>
                        </div>
                        <div class="bg-white shadow-lg rounded-lg p-6">
                            <p class="text-gray-700">"Fast shipping and beautiful craftsmanship. Highly recommend!"</p>
                            <p class="mt-2 text-sm text-gray-500">- John</p>
                        </div>
                        <div class="bg-white shadow-lg rounded-lg p-6">
                            <p class="text-gray-700">"Such lovely products! They made my living room look amazing."</p>
                            <p class="mt-2 text-sm text-gray-500">- Emily</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="mt-6">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Home;