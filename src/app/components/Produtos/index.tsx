'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GridContainer } from '../GridContainer';

import image1 from '../../../../public/images/image1.jpg';
import image2 from '../../../../public/images/image2.jpg';
import image3 from '../../../../public/images/image3.jpg';

const images = [image1, image2, image3];

export function Produtos() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => ((prevIndex + 1) >= 3 ? 0 : prevIndex+1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      prevIndex => ((prevIndex - 1) <= 0 ? 2 : prevIndex-1)
    );
  };

  const handleNext = () => {
    console.log("aqui");
    setCurrentIndex(
      prevIndex => ((prevIndex + 1) >= 3 ? 1 : prevIndex+1)
    );
  };

  return (
    <GridContainer className="flex flex-col items-center justify-center h-[calc(100vh-9rem)] overflow-auto">
      <h1 className="text-4xl text-center font-bold m-4">Produtos</h1>
      <section className="relative w-1/2 h-4/5">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full shadow shadow-green-600 rounded"
        />
        <button
          onClick={handlePrev}
          className="absolute bottom-1/2 left-4 text-2xl font-extrabold text-white"
        >
          <span className='inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-green-500'>
            &lt;
          </span>
        </button>
        <button
          onClick={handleNext}
          className="absolute bottom-1/2 right-4 text-2xl font-extrabold text-white"
        >
          <span className='inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-green-500'>
            &gt;
          </span>
        </button>
      </section>
      <p></p>
    </GridContainer>
  );
}
