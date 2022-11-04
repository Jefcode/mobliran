import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import Footer from './components/Partials/Footer';
import CartScreen from './screens/CartScreen';
import WishListScreen from './screens/WishListScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import AccountScreen from './screens/Account/AccountScreen';
import Dashboard from './screens/Account/Dashboard';
import Orders from './screens/Account/Orders';
import AccountDetails from './screens/Account/AccountDetails';
import EditAddress from './screens/Account/EditAddress';
import CheckoutScreen from './screens/CheckoutScreen';
import ShopScreen from './screens/ShopScreen';
import AboutUsScreen from './screens/Pages/AboutUsScreen';

function App() {
  return (
    // Wrapper
    <div className='w-full max-w-full min-w-full min-h-screen overflow-hidden'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/shop' element={<ShopScreen />} />
        <Route path='/product/:id' element={<ProductDetailScreen />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/wishlist' element={<WishListScreen />} />
        <Route path='/checkout' element={<CheckoutScreen />} />

        {/* Pages */}
        <Route path='/about-us' element={<AboutUsScreen />} />

        <Route path='/my-account' element={<AccountScreen />}>
          <Route path='' element={<Dashboard />} />
          <Route path='orders' element={<Orders />} />
          <Route path='edit-account' element={<AccountDetails />} />
          <Route path='edit-address' element={<EditAddress />} />
        </Route>

        <Route path='/*' element={<NotFoundScreen />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
