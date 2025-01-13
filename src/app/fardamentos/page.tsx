'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { GridContainer } from '../components/GridContainer';
import { Header } from '../components/Header';
import Link from 'next/link';

// Import images dynamically from subfolders
function importAll(r: __WebpackModuleApi.RequireContext): {
  [key: string]: string[];
} {
  const images: { [key: string]: string[] } = {};

  r.keys().forEach((item: string) => {
    const category = item.split('-')[0].replace('./', '').trim();
    if (!images[category]) {
      images[category] = [];
    }
    images[category].push(r(item));
  });
  return images;
}

const images = importAll(
  require.context(
    '../../../public/images/fardamentos',
    true,
    /\.(png|jpe?g|svg)$/
  )
);

const Fardamentos: React.FC = () => {
  const initialImageIndex = Object.keys(images).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {} as { [key: string]: number });

  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: string]: number;
  }>(initialImageIndex);

  const categories = Object.keys(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = { ...prevIndex };
        Object.keys(newIndex).forEach((key) => {
          newIndex[key] = (newIndex[key] + 1) % images[key].length;
        });
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleNext = (category: string) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [category]: (prevState[category] + 1) % images[category].length,
    }));
  };

  const handlePrev = (category: string) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [category]:
        (prevState[category] - 1 + images[category].length) %
        images[category].length,
    }));
  };

  return (
    <>
      <Header />
      <GridContainer className="h-[calc(100vh-10rem)]">
        <h1 className="text-4xl font-bold text-center my-8">Fardamentos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 h-full">
          {categories.map((category) => (
            <div key={category} className="h-80 w-11/12 p-4 mb-4">
              <h2 className="text-2xl font-semibold mb-2 text-center capitalize">
                {category}
              </h2>
              <div className="h-64 w-full mb-4 flex justify-center items-center">
                <Image
                  src={images[category][currentImageIndex[category] || 0]}
                  alt={category}
                  width={200}
                  height={200}
                  priority={currentImageIndex[category] === 0}
                  className="rounded-lg object-fill w-auto h-full shadow shadow-green-600"
                />
                <div className="absolute h-64 w-52 z-1 py-4 flex flex-col justify-around items-center bg-green-800 bg-opacity-70 text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-base text-center font-semibold">
                    Modelos exclusivos, bordados incríveis e uma variedade de
                    cores esperando por você.
                  </p>
                  <p className="text-base text-center font-semibold">
                    Clique em{' '}
                    <span className="bg-white text-green-600 rounded px-1">
                      Saiba Mais
                    </span>{' '}
                    e fale conosco no{' '}
                    <span className="bg-white text-green-600 rounded px-1">
                      WhatsApp
                    </span>
                    !
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => handlePrev(category)}
                  className="text-2xl font-extrabold mr-2"
                >
                  <span className="transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-green-500">
                    &lt;
                  </span>
                </button>
                <Link href={'#'}>
                  <span className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-300 ease-in-out">
                    Saiba Mais
                  </span>
                </Link>
                <button
                  onClick={() => handleNext(category)}
                  className="text-2xl font-extrabold ml-2"
                >
                  <span className="transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-green-500">
                    &gt;
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </GridContainer>
      <Footer />
    </>
  );
};

export default Fardamentos;
