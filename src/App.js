import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector(state => state.cart)

  const showCart = useSelector(state => state.ui.isCartVisible);

  useEffect(()=> {
    fetch("https://advanced-redux-7e984-default-rtdb.firebaseio.com/cart.json", {
      method: 'PUT',
      body: JSON.stringify(cart)
    })
  }, [cart])
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
