
import React from 'react';
import { PROCESS_STEPS } from '../constants.ts';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-32 bg-neutral-medium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-neutral-dark">Naš proces v 4 korakih</h2>
          <p className="mt-4 text-lg text-neutral-text">
            Od ideje do izvedbe vas vodimo skozi jasen in strukturiran proces, ki zagotavlja predvidljivost in vrhunski rezultat.
          </p>
        </div>
        <div className="relative mt-20 max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="relative p-6 text-center bg-neutral-light rounded-sm border border-gray-200/80">
                <div className="text-6xl font-bold font-serif text-gray-100">{step.number}</div>
                <h3 className="mt-2 text-xl font-semibold text-neutral-dark">{step.title}</h3>
                <p className="mt-1 text-neutral-text text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
