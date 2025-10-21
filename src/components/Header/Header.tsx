import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>Точка</div>
      <nav className='nav'>
        <Link to='/products'>Товары</Link>
        <Link to='/about'>О нас</Link>
        <Link to='/contact'>Контакты</Link>
      </nav>
      <div className='auth-buttons'>
        <Link to='/login' className='auth-button login-button'>Войти</Link>
        <Link to='/register' className='auth-button register-button'>Регистрация</Link>
      </div>
    </header>
  );
};