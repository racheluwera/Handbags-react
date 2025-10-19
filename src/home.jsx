
import bannerImg from "./assets/image8.jpg"; // ✅ replace with your image path

function Home() {
    const products = [
  { 
      image: "./src/assets/image.jpg" },
  { 
    image: "./src/assets/image1.jpg" },
    {
    image: "./src/assets/image2.jpg"},
 {
    image: "./src/assets/image3.jpg"},
    {
    image: "./src/assets/image4.jpg"
    },
    {
    image: "./src/assets/image5.jpg"
    }
]
  return (
    <>
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
          Welcome to <span className="text-pink-400">LuxeBags</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover timeless elegance — your one-stop store for premium handbags
          that define fashion, quality, and confidence.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md"><a href="/products.jsx">
          Shop Now
        </a></button>
      </div>
    </section>
   
      <div className="p-8 bg-gray-100 min-h-screen">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((products, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={products.image}
              className="w-full h-64 object-cover"
            />
              </div>
        )
      )}
      </div>
    </div>
    </>
  );
}

export default Home;
