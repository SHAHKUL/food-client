import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Signup from "./component/signup/Signup";
import Create from "./component/create/Create";
import Foodcatalog from "./component/footCatalog/Foodcatalog";
import FoodDetails from "./component/foodDetails/FoodDetails";
import Cart from "./component/cart/Cart";
import Checkout from "./component/checkout/Checkout";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/foods/:id" element={<Foodcatalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
