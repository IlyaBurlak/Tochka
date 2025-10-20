import { Link } from 'react-router-dom';

import '../styles/HomePage.scss';
import { Header } from '../components/Header/Header.tsx';
import { HeroSection } from '../components/HeroSection/HeroSection.tsx';

export const HomePage = () => {
  return (
    <div className='home-page'>
      <Header />

      <HeroSection
        animationContent={
          <>
            <div className='animated-text'>Новый стиль</div>
            <div className='animated-subtitle'>Ждет именно тебя</div>
            <div className='animated-tagline'>Открой коллекцию</div>
          </>
        }
        ctaButtons={
          <div className='cta-buttons'>
            <Link className='btn-primary' to='/products'>
              Смотреть каталог
            </Link>
            <Link className='btn-secondary' to='/about'>
              Узнать больше
            </Link>
          </div>
        }
        shapesCount={10}
        subtitle='Магазин, где каждая покупка - это точка отсчёта нового стиля. Откройте для себя уникальные товары по доступным ценам.'
        title={
          <>
            Добро пожаловать в <span className='accent'>Точку</span>
          </>
        }
      />

      <section className='features'>
        <div className='features-grid'>
          <div className='feature-card'>
            <div className='icon'>🚚</div>
            <h3>Быстрая доставка</h3>
            <p>Доставка по всему городу за 24 часа</p>
          </div>
          <div className='feature-card'>
            <div className='icon'>💳</div>
            <h3>Удобная оплата</h3>
            <p>Любые способы оплаты онлайн и наличными</p>
          </div>
          <div className='feature-card'>
            <div className='icon'>🛡️</div>
            <h3>Гарантия качества</h3>
            <p>Возврат и обмен в течение 30 дней</p>
          </div>
          <div className='feature-card'>
            <div className='icon'>📞</div>
            <h3>Поддержка 24/7</h3>
            <p>Всегда на связи для ваших вопросов</p>
          </div>
        </div>
      </section>
    </div>
  );
};
