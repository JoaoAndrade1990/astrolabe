import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import UsersPage from './pages/UsersPage/UsersPage';
import CartPage from './pages/CartPage/CartPage';
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Layout from './components/Layout';
import { CartProvider } from './contexts/CartContext';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/products' element={<CategoryPage />} />
              <Route path='/products/:id' element={<ProductDetailsPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/users' element={<UsersPage />} />
              <Route path='/users/:id' element={<UserDetailsPage />} />
              <Route path='login' element={<LoginPage />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
