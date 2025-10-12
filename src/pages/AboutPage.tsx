import { Link } from 'react-router-dom';
import '../styles/HomePage.scss';

const AboutPage = () => {
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
                    <h1>О <span className="accent">Нас</span></h1>
                    <p className="subtitle">
                        <span className="quote">
                         <span className="quote-mark">" </span>
                             Сила не говорит, мудрость не спорит, мастерство не нуждается в признании.
                            Всё это видно в тишине дела.
                            <span className="quote-mark">"</span>
                         </span>
                        <span className="quote-author">— Из хроник великих созидателей</span>
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
                    </div>
                    <div className="animation-content">
                        <div className="animated-text">Наша история</div>
                        <div className="animated-subtitle">С 2025 года</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;