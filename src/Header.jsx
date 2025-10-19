import {Link} from "react-router-dom"
 function Header() {
  return (
    <div>
       <nav className="bg-fuchsia-200  py-2 px-4 flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-bold text-color-black">Shop</h1>
            <p className="text-white text-1xl">Service</p>
            </div>
        <div className="justify-between space-x-4 text-lg ">
        <Link to="/"className="hover:text-blue-600">Home</Link>
        <Link to="/About"className="hover:text-blue-600">About</Link>
         <Link to="/Product"className="hover:text-blue-600">Products</Link>
          <Link to="/Contact"className="hover:text-blue-600">Contacts</Link>
           
         </div>
      </nav>
    </div>
  )}
  export default Header;