
import React from 'react';

const useScrollTo = (id: string) => {
  const handleScroll = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return handleScroll;
};

export default useScrollTo;
