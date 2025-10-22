import { Link } from 'react-router-dom';

import { Header } from '../../widgets/Header/Header.tsx';
import { HeroSection } from '../../widgets/HeroSection/HeroSection.tsx';

export const ProductsPage = () => {
  return (
    <div className='home-page'>
      <Header />

      <HeroSection
        animationContent={
          <>
            <div className='animated-text'>Каталог</div>
            <div className='animated-subtitle'>Скоро открытие</div>
          </>
        }
        ctaButtons={
          <div className='cta-buttons'>
            <Link className='btn-secondary' to='/'>
              На главную
            </Link>
          </div>
        }
        shapesCount={5}
        subtitle='Откройте для себя уникальную коллекцию товаров, которые подчеркнут ваш индивидуальный стиль.'
        title={
          <>
            Наши <span className='accent'>Товары</span>
          </>
        }
      />
    </div>
  );
};
