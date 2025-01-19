import Link from 'next/link';
import { BiMailSend } from 'react-icons/bi';
import { BsScissors } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { GiLargeDress } from 'react-icons/gi';

export function Contatos() {
  return (
    <section className="w-full bottom-0">
      <div className="grid md:grid-cols-2 gap-4 p-8">
        <section className="grid grid-cols-1 gap-6">
          <div className="bg-white p-4 rounded shadow-md shadow-green-600">
            <h2 className="text-2xl font-bold mb-2 text-center">
              Esperamos o seu Contato
            </h2>
            <div className="flex flex-col space-y-4 mt-4">
              <Link
                href="mailto:sabrisia@sabrisisa.com.br"
                className="flex items-center space-x-2 p-2 bg-green-100 rounded-lg shadow-md hover:bg-green-200 transition-colors"
              >
                <BiMailSend className="text-green-600 text-2xl" />
                <span className="text-lg font-semibold text-gray-700">
                  sabrisia@sabrisisa.com.br
                </span>
              </Link>
              <Link
                href="tel:079998240775"
                className="md:pointer-events-none flex items-center space-x-2 p-2 bg-green-100 rounded-lg shadow-md hover:bg-green-200 transition-colors"
              >
                <GiLargeDress className="text-green-600 text-2xl" />
                <span className="text-lg font-semibold text-gray-700">
                  Loja: (79) 99824-0775
                </span>
              </Link>
              <Link
                href="tel:79998256316"
                className="md:pointer-events-none flex items-center space-x-2 p-2 bg-green-100 rounded-lg shadow-md hover:bg-green-200 transition-colors"
              >
                <BsScissors className="text-green-600 text-2xl" />
                <span className="text-lg font-semibold text-gray-700">
                  Confecção: (79) 99825-6316
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-md shadow-green-600">
            <h2 className="text-2xl font-bold mb-4 text-center">Siga-nos</h2>
            <div className="flex justify-around items-center text-5xl space-x-4">
              <Link 
                href="https://www.instagram.com/sabrisiaconfeccoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                <FaInstagram className="rounded-lg text-pink-500 hover:text-pink-600 transition-transform transform hover:scale-110 shadow-lg hover:shadow-pink-500/50" />
              </Link>
              <Link 
                href="https://www.facebook.com/sabrisiaconfeccoes"
                target="_blank"
              >
                <FaFacebook className="rounded-full text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110 shadow-lg hover:shadow-blue-600/50" />
              </Link>
              <Link 
                href={'#'}
                target="_blank"
              >
                <FaTiktok className="text-black hover:text-gray-800 transition-transform transform hover:scale-110 shadow-lg hover:shadow-gray-800/50" />
              </Link>
              <Link 
                href="https://api.whatsapp.com/send?1=pt_BR&phone=5579998240775"
                target="_blank"
              >
                <FaWhatsapp className="rounded-lg text-green-500 hover:text-green-600 transition-transform transform hover:scale-110 shadow-lg hover:shadow-green-500/50" />
              </Link>
            </div>
          </div>
        </section>
        <section className="relative bg-white p-4 rounded shadow-md shadow-green-600 h-full">
          <h2 className="text-2xl text-center font-bold mb-4">Localização</h2>
          <p className="p-2 text-gray-700">
            Rua Antônio Dórea, 301 - Centro, Poço Verde - SE
          </p>
          <div className="md:h-3/4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.2877520037678!2d-38.178446400000006!3d-10.712274400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70e2791b9a4d0a1%3A0xf56e410418ba7c4d!2zU2FicsOtc2lhIENvbmZlY8Onw7Vlcw!5e0!3m2!1spt-BR!2sbr!4v1735871285132!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full p-2"
            ></iframe>
          </div>
        </section>
      </div>
    </section>
  );
}
