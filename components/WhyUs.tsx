
import React from 'react';
import { WHY_US_POINTS } from '../constants.ts';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative h-96 lg:h-full min-h-[500px] rounded-sm overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1593113646773-5b86149502a0?q=80&w=2940&auto=format&fit=crop" 
                alt="Woodworking detail" 
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gray-900/10"></div>
          </div>
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-neutral-dark">Zakaj izbrati nas?</h2>
            <p className="mt-4 text-lg text-neutral-text leading-relaxed">
              Naše vodilo je preprosto: ustvariti pohištvo, ki presega trende in traja generacije.
            </p>
            <dl className="mt-12 space-y-8">
              {WHY_US_POINTS.map((point) => (
                <div key={point.title} className="relative pl-9">
                  <dt className="font-semibold text-neutral-dark">
                    <div className="absolute left-0 top-1 h-5 w-5 text-brand-light">
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {point.title}
                  </dt>
                  <dd className="mt-1 text-neutral-text">{point.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
