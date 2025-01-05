import Image from 'next/image';
import { GridContainer } from '../GridContainer';
import Link from 'next/link';

export function Sobre() {
  return (
    <GridContainer className="h-screen items-center overflow-auto mt-4">
      <h1 className="text-4xl text-center font-bold mb-4">Sobre</h1>
      <div className="flex items-center justify-center p-8">
        <div className="w-1/2 flex justify-center">
          <Image
            src="/imagem-sobre.jpg"
            alt="Sobre"
            width={300}
            height={300}
            className="rounded-t-3xl shadow-md shadow-green-600 object-cover"
          />
        </div>
        <section className="w-1/2 ml-8">
          <p className="text-2xl text-justify mx-auto">
            Somos uma empresa preocupada em oferecer produtos de alta qualidade,
            aproveitando os recursos de maneira sustentável em busca de
            satisfação do cliente.
          </p>
        </section>
      </div>
      <div className="flex flex-col items-end justify-between w-full p-8">
        <p className="font-medium">Acompanhe nossas redes sociais</p>
        <div className="flex space-x-14 mt-4">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg"
              alt="Ícone-Instagram"
              width={35}
              height={35}
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
              width={35}
              height={35}
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
              width={35}
              height={35}
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
              width={35}
              height={35}
            />
          </Link>
        </div>
      </div>
    </GridContainer>
  );
}
