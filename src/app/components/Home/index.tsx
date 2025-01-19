'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GridContainer } from '../GridContainer';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export function Home() {
  return (
    <>
      <Header />
      <GridContainer className="flex flex-col justify-center items-center gap-16 h-screen md:grid md:grid-cols-2 md:gap-0 md:place-items-center md:h-[calc(100vh-9rem)]">
        <section className="flex flex-col justify-between pl-3 md:space-y-10">
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Inspirada em{' '}
              <span className="text-green-600 font-serif">você</span>
              <div className="h-1 w-full bg-gradient-to-r from-green-600 to-transparent rounded-full my-4"></div>
            </h1>
            <div className="h-1/3 mt-3">
              <p className="flex h-full w-auto text-base md:text-lg lg:text-xl">
                Explore a elegância e o conforto das coleções exclusivas da
                Sabrísia Confecção. Descubra nossas novidades em multimarcas e
                fardamentos de todos os tipos, perfeitas para qualquer ocasião.
                Cada peça é inspirada em você!
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-around items-center text-5xl space-x-4">
            <Link
              href="https://www.instagram.com/sabrisiaconfeccoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <FaInstagram className="rounded-lg hover:text-pink-600 transition-transform transform hover:scale-110 hover:shadow-pink-500/50" />
            </Link>
            <Link
              href="https://www.facebook.com/sabrisiaconfeccoes"
              target="_blank"
            >
              <FaFacebook className="rounded-full hover:text-blue-700 transition-transform transform hover:scale-110 hover:shadow-blue-600/50" />
            </Link>
            <Link href={'#'} target="_blank">
              <FaTiktok className="hover:text-gray-800 transition-transform transform hover:scale-110 hover:shadow-gray-800/50" />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5579998240775"
              target="_blank"
            >
              <FaWhatsapp className="rounded-lg hover:text-green-600 transition-transform transform hover:scale-110 hover:shadow-green-500/50" />
            </Link>
          </div>
        </section>
        <aside className="relative flex justify-center items-center w-[300] md:w-[370] z-0">
          <Image
            src="/imagem-home.jpg"
            alt="Sobre"
            width={400}
            height={100}
            className="rounded-full shadow-md shadow-green-600 object-fill h-auto"
            priority={true}
          />
        </aside>
      </GridContainer>
      <Footer />
    </>
  );
}
