import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<ProductsPage />} path='/products' />
          <Route element={<AboutPage />} path='/about' />
          <Route element={<ContactPage />} path='/contact' />
        </Routes>
      </div>
    </Router>
  );
};
