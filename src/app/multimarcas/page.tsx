'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GridContainer } from '../components/GridContainer';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import Link from 'next/link';

function importAll(r: __WebpackModuleApi.RequireContext): string[] {
  const images: string[] = [];

  r.keys().forEach((item: string) => {
    images.push(r(item));
  });

  return images;
}

const images = importAll(
  require.context(
    '../../../public/images/multimarcas',
    true,
    /\.(png|jpe?g|svg)$/
  )
);

function Multimarcas() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <Header />
      <GridContainer className="h-screen flex flex-col justify-around items-center">
        <h1 className="text-4xl 2xl:text-5xl text-center font-bold">Loja Multimarcas</h1>
        <section className="grid grid-cols-1">
          <div className="relative mb-4 flex justify-center items-center">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              width={500}
              height={300}
              className="shadow w-[300] 2xl:w-[400] shadow-green-600 object-fill rounded"
            />
            <div className="absolute p-8 inset-0 m-auto flex flex-col justify-around items-center bg-green-800 bg-opacity-70 text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl 2xl:text-2xl text-center font-semibold">
              Modelos exclusivos, bordados incríveis e uma variedade de cores
              esperando por você.
              </p>
              <p className="text-xl 2xl:text-2xl text-center font-semibold">
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
              onClick={handlePrev}
              className="text-2xl font-extrabold mr-2"
            >
              <span className="transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-green-500">
                &lt;
              </span>
            </button>
            <Link 
              href="https://wa.me/5579998240775?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20os%20modelos%20de%20roupas%20dispon%C3%ADveis." 
              target="_blank"
            >
              <span className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-300 ease-in-out">
                Saiba Mais
              </span>
            </Link>
            <button
              onClick={handleNext}
              className="text-2xl font-extrabold ml-2"
            >
              <span className="transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-green-500">
                &gt;
              </span>
            </button>
          </div>
        </section>
        <p></p>
      </GridContainer>
      <Footer />
    </>
  );
}

export default Multimarcas;
