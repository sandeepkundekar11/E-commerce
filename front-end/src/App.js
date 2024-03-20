import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import EditProfile from "./Components/Profile/EditProfile";
import SignUp from "./Components/SignUp";
import ProductsCheckoutComp from "./Components/AddToCard/ProuctsCheckoutComp";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/checkout" element={<ProductsCheckoutComp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
