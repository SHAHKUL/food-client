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
import Edit from "./component/edit/Edit";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
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
