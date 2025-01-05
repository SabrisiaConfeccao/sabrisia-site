import { GridContainer } from '../GridContainer';

export function Contatos() {
  return (
    <GridContainer className="h-screen overflow-auto mt-4 p-8">
      <h1 className="text-4xl text-center font-bold m-4">Contatos</h1>
      <div className="flex items-center justify-between w-full p-8">
        <section className="flex flex-col justify-between h-[calc(70vh-4.5rem)] w-1/2">
          <div className="bg-white h-[48%] p-4 rounded shadow-md shadow-green-600">
            <h2 className="text-xl font-bold mb-2">Esperamos o seu Contato</h2>
            <p>Email: sabrisia@sabrisisa.com.br</p>
            <p>Telefone: (79) 9999-9999</p>
          </div>
          <div className="bg-white h-[48%] p-4 rounded shadow-md shadow-green-600">
            <h2 className="text-xl font-bold mb-2">Siga-nos</h2>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </section>
        <section className="mt-0 ml-4 h-[calc(70vh-4.5rem)] w-1/2">
          <aside className="bg-white p-4 rounded shadow-md shadow-green-600 h-full">
            <h2 className="text-xl text-center font-bold mb-2">Localização</h2>
            <p className="font-">Rua Antônio Dórea, 301 - Centro, Poço Verde - SE</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.2877520037678!2d-38.178446400000006!3d-10.712274400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70e2791b9a4d0a1%3A0xf56e410418ba7c4d!2zU2FicsOtc2lhIENvbmZlY8Onw7Vlcw!5e0!3m2!1spt-BR!2sbr!4v1735871285132!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded w-full h-[calc(100%-4rem)] p-2"
            ></iframe>
          </aside>
        </section>
      </div>
    </GridContainer>
  );
}
