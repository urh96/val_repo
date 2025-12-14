
import React from 'react';
import Button from './ui/Button.tsx';
import { PROOF_CHIPS } from '../constants.ts';
import useScrollTo from '../hooks/useScrollTo.ts';

const Hero: React.FC = () => {
  const handleScrollToContact = useScrollTo('contact');
  const handleScrollToPortfolio = useScrollTo('portfolio');

  return (
    <section className="relative bg-neutral-dark text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        poster="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2960&auto=format&fit=crop"
      >
        <source src="https://videos.pexels.com/video-files/4494829/4494829-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center min-h-[75vh] md:min-h-[85vh] max-w-4xl py-24">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
            Masivno pohištvo za zahtevne prostore.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
            Unikatne rešitve za zasebne domove in arhitekte v Sloveniji in EU.
          </p>
          <div className="mt-8 flex items-center gap-x-6 text-sm text-gray-300 tracking-wider">
            {PROOF_CHIPS.map((chip, index) => (
              <React.Fragment key={chip}>
                <span>{chip}</span>
                {index < PROOF_CHIPS.length - 1 && <span className="text-brand-light">&middot;</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button onClick={handleScrollToContact} variant="primary" className="w-full sm:w-auto">
              Povpraševanje
            </Button>
            <Button onClick={handleScrollToPortfolio} variant="secondary" className="w-full sm:w-auto border-gray-400 text-gray-200 hover:bg-white hover:text-neutral-dark">
              Ogled projektov
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
