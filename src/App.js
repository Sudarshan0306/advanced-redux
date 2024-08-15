import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./actions/sendCartData";
import { fetchCartData } from "./actions/fetchCartData";

let initial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.isCartVisible);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if(cart.changed) {
      dispatch(sendCartData(cart));

    }
    
    // const sendCartData = async () => {

    // dispatch(
    //   uiActions.showNotification({
    //     status: "Pending",
    //     title: "Sending...",
    //     message: "Sending cart data!",
    //   })
    // );
    // const response = await fetch(
    //   "https://advanced-redux-7e984-default-rtdb.firebaseio.com/cart.json",
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(cart),
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error("Sending cart data failed.");
    // }
    // dispatch(
    //   uiActions.showNotification({
    //     status: "success",
    //     title: "Success!",
    //     message: "Sent cart data successfully!",
    //   })
    // );
    // };

    // sendCartData().catch((err) => {
    //   // dispatch(
    //   //   uiActions.showNotification({
    //   //     status: "error",
    //   //     title: "Error!",
    //   //     message: "Sending cart data failed!",
    //   //   })
    //   // );
    // });
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
