
import React, { useState, useMemo } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '../constants.ts';
import { ProjectCategory } from '../types.ts';
import Chip from './ui/Chip.tsx';

const FeaturedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'Vsi'>('Vsi');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Vsi') {
      return PROJECTS;
    }
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-neutral-dark">Izbrani projekti</h2>
          <p className="mt-4 text-lg text-neutral-text">
            Vsak projekt je zgodba o sodelovanju, natančnosti in ljubezni do materialov.
          </p>
        </div>

        <div className="mt-12 flex justify-center flex-wrap gap-3 sm:gap-4">
          <Chip
            onClick={() => setActiveFilter('Vsi')}
            isActive={activeFilter === 'Vsi'}
          >
            Vsi projekti
          </Chip>
          {PROJECT_CATEGORIES.map(category => (
            <Chip
              key={category}
              onClick={() => setActiveFilter(category)}
              isActive={activeFilter === category}
            >
              {category}
            </Chip>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-sm aspect-w-1 aspect-h-1">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm opacity-80">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
