

export default function Products() {
const doctors = [
  { 
    name: "Name:Bag1",
    price: "Price:$50",
      image: "./src/assets/image1.jpg" },
  { 
    name: "Bag2",
    price: "$60",
      image: "./src/assets/image2.jpg" },
    {
    name: "Bag3",
    price: "$70",
      image: "./src/assets/image3.jpg"},
    
 {
    name: "Bag4",
    price: "$80",
      image: "./src/assets/image4.jpg"},

    {
   name: "Bag5",
    price: "$90",
      image: "./src/assets/image10.jpg"
    },
    {
   name: "Bag6",
    price: "$100",
      image: "./src/assets/image9.jpg"
    }
  ]
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((Products, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Products.image}
              alt={Products.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{Products.name}</h2>
              <p className="text-gray-600">{Products.price}</p>
              </div>
              </div>
        )
      )}
      </div>
    </div>
  )
}