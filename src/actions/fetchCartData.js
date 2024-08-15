import { cartActions } from "../slices/cartSlice";
import { uiActions } from "../slices/ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://advanced-redux-7e984-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
