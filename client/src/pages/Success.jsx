import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartRedux';
import axios from 'axios';

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

const Success = () => {
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post("/api/order", {
          userId: currentUser._id,
          products: cart.products?.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total
        }, { headers: {token: `Bearer ${TOKEN}`} },{ withCredentials: true });
        setOrderId(res.data._id);
      } catch {}
    };
    createOrder();
  }, [cart, currentUser, dispatch]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order ID is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link to="/" onClick={()=> dispatch(clearCart())}><button style={{ padding: 10, marginTop: 20 }}>Continue Shopping</button></Link>
    </div>
  );
};

export default Success;