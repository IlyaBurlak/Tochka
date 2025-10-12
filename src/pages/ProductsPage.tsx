import { Link } from 'react-router-dom';
import '../styles/HomePage.scss';

const ProductsPage = () => {
    return (
        <div className="home-page">
            <header className="header">
                <div className="logo">Точка</div>
                <nav className="nav">
                    <Link to="/products">Товары</Link>
                    <Link to="/about">О нас</Link>
                    <Link to="/contact">Контакты</Link>
                </nav>
                <div className="cart-icon">
                </div>
            </header>

            <section className="hero">
                <div className="hero-content">
                    <h1>Наши <span className="accent">Товары</span></h1>
                    <p className="subtitle">
                        Откройте для себя уникальную коллекцию товаров,
                        которые подчеркнут ваш индивидуальный стиль.
                    </p>

                    <div className="cta-buttons">
                        <Link to="/" className="btn-secondary">
                            На главную
                        </Link>
                    </div>
                </div>

                <div className="hero-animation">
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                        <div className="shape shape-4"></div>
                        <div className="shape shape-5"></div>
                    </div>
                    <div className="animation-content">
                        <div className="animated-text">Каталог</div>
                        <div className="animated-subtitle">Скоро открытие</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;