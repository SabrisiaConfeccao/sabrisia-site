import Image from 'next/image';
import { GridContainer } from '../components/GridContainer';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

function Sobre() {
  return (
    <>
      <Header />
      <GridContainer className="h-[calc(100vh-10rem)] items-center mt-4">
        <h1 className="text-4xl text-center font-bold mb-4">Sobre</h1>
        <div className="flex items-center justify-around">
          <div className="h-96 w-full flex justify-center mt-3">
            <Image
              src="/imagem-sobre.jpg"
              alt="Sobre"
              width={300}
              height={300}
              className="h-auto shadow-lg shadow-green-600 object-fill"
            />
          </div>
          <section className="w-full">
            <p className="text-2xl text-justify">
              Somos uma empresa preocupada em oferecer produtos de alta qualidade,
              aproveitando os recursos de maneira sustentável em busca de
              satisfação do cliente.
            </p>
          </section>
        </div>
      </GridContainer>
      <Footer />
    </>
  );
}

export default Sobre;