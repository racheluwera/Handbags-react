import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Products from "./pages/Products.jsx";
import Contacts from "./pages/Contacts.jsx";
import Footer from "./pages/footer.jsx";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
