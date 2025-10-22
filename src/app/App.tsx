import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AboutPage } from '../pages/AboutPage/AboutPage.tsx';
import { ContactPage } from '../pages/ContactPage/ContactPage.tsx';
import { HomePage } from '../pages/HomePage/HomePage.tsx';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage.tsx';

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
