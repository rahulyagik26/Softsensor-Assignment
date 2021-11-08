import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import CartProvider from './store/cart-context';
import ProductProvider from './store/product-context';

function App() {
  return (
    <Fragment>
      <ProductProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </Fragment>
  );
}

export default App;
