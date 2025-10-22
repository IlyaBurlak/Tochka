import { Link } from 'react-router-dom';

import { Header } from '../../widgets/Header/Header.tsx';
import { HeroSection } from '../../widgets/HeroSection/HeroSection.tsx';

export const AboutPage = () => {
  return (
    <div className='home-page'>
      <Header />

      <HeroSection
        animationContent={
          <>
            <div className='animated-text'>Наша история</div>
            <div className='animated-subtitle'>С 2025 года</div>
          </>
        }
        ctaButtons={
          <div className='cta-buttons'>
            <Link className='btn-secondary' to='/'>
              На главную
            </Link>
          </div>
        }
        shapesCount={4}
        subtitle={
          <>
            <span className='quote'>
              <span className='quote-mark'>&ldquo; </span>
              Сила не говорит, мудрость не спорит, мастерство не нуждается в признании. Всё это
              видно в тишине дела.
              <span className='quote-mark'>&rdquo;</span>
            </span>
            <span className='quote-author'>— Из хроник великих созидателей</span>
          </>
        }
        title={
          <>
            О <span className='accent'>Нас</span>
          </>
        }
      />
    </div>
  );
};
