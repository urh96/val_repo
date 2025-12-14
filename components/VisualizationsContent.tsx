
import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider.tsx';
import ServicePackageCard from './ServicePackageCard.tsx';
import { VISUALIZATION_PROJECTS, VISUALIZATION_PACKAGES } from '../constants.ts';
import { VisualizationProject } from '../types.ts';

interface VisualizationsContentProps {
  onInquiry: (productName: string) => void;
}

const ProjectShowcase: React.FC<{ project: VisualizationProject }> = ({ project }) => {
  if (project.layout === 'before-after' && project.beforeImage) {
    return (
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-dark">{project.title}</h2>
          <p className="mt-2 text-sm text-neutral-text/80 tracking-wider uppercase">{project.location}</p>
          <p className="mt-4 text-lg text-neutral-text">{project.description}</p>
        </div>
        <div className="mt-12">
          <BeforeAfterSlider beforeImage={project.beforeImage} afterImage={project.image} />
        </div>
      </section>
    );
  }

  if (project.layout === 'two-column') {
    return (
      <section className="py-12 md:py-20 bg-neutral-medium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="lg:order-last">
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover rounded-sm shadow-lg" />
            </div>
            <div className="max-w-md">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-dark">{project.title}</h2>
              <p className="mt-2 text-sm text-neutral-text/80 tracking-wider uppercase">{project.location}</p>
              <p className="mt-4 text-lg text-neutral-text leading-relaxed">{project.description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default to full-width
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-dark">{project.title}</h2>
        <p className="mt-2 text-sm text-neutral-text/80 tracking-wider uppercase">{project.location}</p>
        <p className="mt-4 text-lg text-neutral-text">{project.description}</p>
      </div>
      <div className="w-full">
        <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
      </div>
    </section>
  );
};

const VisualizationsContent: React.FC<VisualizationsContentProps> = ({ onInquiry }) => {
  return (
    <div className="mt-16">
      {VISUALIZATION_PROJECTS.map(project => (
        <ProjectShowcase key={project.id} project={project} />
      ))}

      <div className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-neutral-dark">Naši paketi vizualizacij</h2>
            <p className="mt-4 text-lg text-neutral-text">Izberite paket, ki najbolj ustreza vašim potrebam in obsegu projekta.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {VISUALIZATION_PACKAGES.map(pkg => (
              <ServicePackageCard key={pkg.id} packageInfo={pkg} onInquiry={onInquiry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualizationsContent;
