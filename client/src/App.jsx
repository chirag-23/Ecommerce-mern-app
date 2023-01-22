import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductInfo from "./pages/ProductInfo";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductInfo/>} />
        <Route 
          path="/login"
          element={
            <>
              {user ? <Navigate to='/'/> : <Login/>}
            </>
          } 
        />
        <Route 
          path="/register" 
          element={
            <>
              {user ? <Navigate to='/'/> : <Register/>}
            </>
          } 
        />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;