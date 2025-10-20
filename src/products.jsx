import { useState } from "react";

export default function Products() {
  const [cart, setCart] = useState([]);

  const products = [
    { name: "Bag1", price: "$50", image: "./src/assets/image1.jpg" },
    { name: "Bag2", price: "$60", image: "./src/assets/image2.jpg" },
    { name: "Bag3", price: "$70", image: "./src/assets/image3.jpg" },
    { name: "Bag4", price: "$80", image: "./src/assets/image4.jpg" },
    { name: "Bag5", price: "$90", image: "./src/assets/image10.jpg" },
    { name: "Bag6", price: "$100", image: "./src/assets/image9.jpg" },
  ];

  // Function to add item to cart
  const handleAddToCart = (products) => {
    setCart((prevCart) => [...prevCart, products]);
    alert(`${products.name} added to cart!`);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.price}</p>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      
      {cart.length > 0 && (
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">
            Total Items: {cart.length}
          </p>
        </div>
      )}
    </div>
  );
}
