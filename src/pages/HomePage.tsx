import { Link } from 'react-router-dom';
import '../styles/HomePage.scss';

const HomePage = () => {
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
                    <h1>
                        Добро пожаловать в <span className="accent">Точку</span>
                    </h1>
                    <p className="subtitle">
                        Магазин, где каждая покупка - это точка отсчёта нового стиля.
                        Откройте для себя уникальные товары по доступным ценам.
                    </p>

                    <div className="cta-buttons">
                        <Link to="/products" className="btn-primary">
                            Смотреть каталог
                        </Link>
                        <Link to="/about" className="btn-secondary">
                            Узнать больше
                        </Link>
                    </div>

                    <div className="stats">
                        <div className="stat-item">
                            <span className="number">5+</span>
                            <span className="label">Товаров</span>
                        </div>
                        <div className="stat-item">
                            <span className="number">3+</span>
                            <span className="label">Покупателей</span>
                        </div>
                        <div className="stat-item">
                            <span className="number">1%</span>
                            <span className="label">Довольных клиентов</span>
                        </div>
                    </div>
                </div>

                <div className="hero-animation">
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                        <div className="shape shape-4"></div>
                        <div className="shape shape-5"></div>
                        <div className="shape shape-6"></div>
                        <div className="shape shape-7"></div>
                        <div className="shape shape-8"></div>
                        <div className="shape shape-9"></div>
                        <div className="shape shape-10"></div>
                    </div>
                    <div className="animation-content">
                        <div className="animated-text">Новый стиль</div>
                        <div className="animated-subtitle">Ждет именно тебя</div>
                        <div className="animated-tagline">Открой коллекцию</div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="icon">🚚</div>
                        <h3>Быстрая доставка</h3>
                        <p>Доставка по всему городу за 24 часа</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">💳</div>
                        <h3>Удобная оплата</h3>
                        <p>Любые способы оплаты онлайн и наличными</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">🛡️</div>
                        <h3>Гарантия качества</h3>
                        <p>Возврат и обмен в течение 30 дней</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">📞</div>
                        <h3>Поддержка 24/7</h3>
                        <p>Всегда на связи для ваших вопросов</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;