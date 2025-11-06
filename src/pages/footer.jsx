
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
    
        <div>
          <h2 className="text-xl font-semibold text-pink-500 mb-3">HandBagStore</h2>
          <p className="text-sm leading-6">
            Your trusted destination for stylish handbags. We bring elegance, durability, and comfort — all in one place.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-pink-500 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-pink-500 mb-3">Get in Touch</h3>
          <p>Email: racheluwera9@gmail.com</p>
          <p>Phone: +250 790042388</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-pink-500">Facebook</a>
            <a href="#" className="hover:text-pink-500">Instagram</a>
            <a href="#" className="hover:text-pink-500">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} HandBagStore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
