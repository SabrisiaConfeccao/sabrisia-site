'use client';

import Image from 'next/image';
import { GridContainer } from '../components/GridContainer';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

function Sobre() {
  return (
    <>
      <Header />
      <GridContainer className="md:my-8 flex flex-col-reverse gap-14 items-center md:justify-around md:flex-row md:gap-0 ">
        <div className="flex justify-center w-3/4">
          <Image
            src="/imagem-sobre.jpg"
            alt="Sobre"
            width={500}
            height={100}
            className="shadow-lg w-full md:w-[300] xl:w-[350] 2xl:w-[500] shadow-green-600 object-fill"
          />
        </div>
        <section className="w-full px-6 md:w-3/4">
          <h1 className="text-4xl 2xl:text-5xl text-center font-bold my-8">Sobre</h1>
          <p className="md:text-2xl text-justify">
            Somos uma empresa preocupada em oferecer produtos de alta qualidade,
            aproveitando os recursos de maneira sustentável em busca de
            satisfação do cliente.
          </p>
        </section>
      </GridContainer>
      <Footer />
    </>
  );
}

export default Sobre;