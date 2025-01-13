'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GridContainer } from '../GridContainer';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function Home() {
  return (
    <>
      <Header />
      <GridContainer className="flex items-center h-[calc(100vh-10rem)]">
        <section className="flex flex-col justify-between h-1/2 w-1/2">
          <div className="w-full">
            <h1 className="text-6xl font-bold">
              Inspirada em{' '}
              <span className="text-green-600 font-serif">você</span>
              <div className="h-1 w-full bg-gradient-to-r from-green-600 to-transparent rounded-full my-4"></div>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              nam debitis, id exercitationem asperiores culpa modi? Similique
              architecto, nam, earum fugiat ipsam dolores minima atque quo id
              maxime hic accusantium!
            </p>
          </div>
          <div className="flex flex-col items-center justify-between h-1/2">
            <div className="flex space-x-14 mt-4">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg"
                  alt="Ícone-Instagram"
                  width={80}
                  height={80}
                />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/facebook.svg"
                  alt="Ícone-Facebook"
                  width={80}
                  height={80}
                />
              </Link>
              <Link
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tiktok.svg"
                  alt="Ícone-TikTok"
                  width={80}
                  height={80}
                />
              </Link>
              <Link
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/whatsapp.svg"
                  alt="Ícone-WhatsApp"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
          </div>
        </section>
        <aside className="flex justify-center w-1/2 mt-4">
          <Image
            src="/imagem-home.jpg"
            alt="Sobre"
            width={300}
            height={100}
            className="rounded-full w-auto shadow-md shadow-green-600 object-fill"
          />
        </aside>
      </GridContainer>
      <Footer />
    </>
  );
}
