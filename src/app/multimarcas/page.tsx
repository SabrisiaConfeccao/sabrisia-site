'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GridContainer } from '../components/GridContainer';

import image1 from '../../../public/images/image1.jpg';
import image2 from '../../../public/images/image2.jpg';
import image3 from '../../../public/images/image3.jpg';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import Link from 'next/link';

const images = [image1, image2, image3];

function Multimarcas() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1 >= 3 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 <= 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    console.log('aqui');
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= 3 ? 1 : prevIndex + 1));
  };

  return (
    <>
      <Header />
      <GridContainer className="h-[calc(100vh-10rem)]">
        <h1 className="text-4xl text-center font-bold m-4">Loja Multimarcas</h1>
        <section className="grid grid-cols-1">
          <div className="relative h-[380px] mb-4 flex justify-center items-center">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              width={300}
              height={300}
              className="shadow shadow-green-600 object-fill rounded"
            />
            <div className="absolute w-80 inset-0 m-auto flex flex-col justify-around items-center bg-green-800 bg-opacity-70 text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl text-center font-semibold">
              Modelos exclusivos, bordados incríveis e uma variedade de cores
              esperando por você.
              </p>
              <p className="text-xl text-center font-semibold">
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
            <Link href={'#'}>
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
