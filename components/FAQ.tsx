
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants.ts';
import { FaqItem } from '../types.ts';
import { ChevronDownIcon } from './ui/Icons.tsx';

interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200/80">
      <dt>
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between text-left text-neutral-dark py-6"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-medium">{item.question}</span>
          <span className="ml-6 flex h-7 items-center">
            <ChevronDownIcon
              className={`h-6 w-6 transform transition-transform duration-300 text-brand-light ${isOpen ? '-rotate-180' : 'rotate-0'}`}
            />
          </span>
        </button>
      </dt>
      <dd className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pb-6 pr-12">
            <p className="text-base leading-7 text-neutral-text">{item.answer}</p>
        </div>
      </dd>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-4xl sm:text-5xl font-bold tracking-tight text-neutral-dark">Pogosta vprašanja</h2>
          <dl className="mt-12">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem 
                key={index} 
                item={item} 
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
