import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header.tsx';

export const ContactPage = () => {
  return (
    <div className='home-page'>
      <Header />

      <section className='hero'>
        <div className='hero-content'>
          <h1>
            Наши <span className='accent'>Контакты</span>
          </h1>
          <p className='subtitle'>
            Свяжитесь с нами любым удобным способом. Мы всегда рады помочь и ответить на ваши
            вопросы, но мы это не сделаем.
          </p>

          <div className='contact-info'>
            <div className='contact-item'>
              <strong>Телефон:</strong> +7 (999) 999-99-99
            </div>
            <div className='contact-item'>
              <strong>Email:</strong> tebeEtoNeNado@mail.ru
            </div>
            <div className='contact-item'>
              <strong>Адрес:</strong> г. Санкт-Петербург, ул. Примерная, д. 1
            </div>
          </div>

          <div className='cta-buttons'>
            <Link className='btn-secondary' to='/'>
              На главную
            </Link>
          </div>
        </div>

        <div className='hero-animation'>
          <div className='floating-shapes'>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`shape shape-${(i % 10) + 1}`} />
            ))}
          </div>
          <div className='animation-content'>
            <div className='animated-text'>Свяжитесь</div>
            <div className='animated-subtitle'>С нами</div>
          </div>
        </div>
      </section>
    </div>
  );
};
