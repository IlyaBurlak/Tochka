import { Link } from 'react-router-dom';
import '../styles/HomePage.scss';

const ContactPage = () => {
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
                    <h1>Наши <span className="accent">Контакты</span></h1>
                    <p className="subtitle">
                        Свяжитесь с нами любым удобным способом.
                        Мы всегда рады помочь и ответить на ваши вопросы, но мы это не сделаем.
                    </p>

                    <div className="contact-info">
                        <div className="contact-item">
                            <strong>Телефон:</strong> +7 (999) 999-99-99
                        </div>
                        <div className="contact-item">
                            <strong>Email:</strong> tebeEtoNeNado@mail.ru
                        </div>
                        <div className="contact-item">
                            <strong>Адрес:</strong> г. Санкт-Петербург, ул. Примерная, д. 1
                        </div>
                    </div>

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
                    </div>
                    <div className="animation-content">
                        <div className="animated-text">Свяжитесь</div>
                        <div className="animated-subtitle">С нами</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;