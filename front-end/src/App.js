import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsCheckoutComp from "./Components/AddToCard/ProuctsCheckoutComp";
import Home from "./Components/Home";
import Login from "./Components/Login";
import ProductInfo from "./Components/ProductInfo";
import EditProfile from "./Components/Profile/EditProfile";
import SignUp from "./Components/SignUp";
import TosterProvider from "./ToasterProvider";
const App = () => {
  return (
    <>
      <TosterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<EditProfile />} />
            <Route path="/checkout" element={<ProductsCheckoutComp />} />
            <Route path="/productInfo/:id" element={<ProductInfo />} />
          </Routes>
        </BrowserRouter>
      </TosterProvider>
    </>
  );
};
export default App;
