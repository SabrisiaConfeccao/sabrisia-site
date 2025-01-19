import { Contatos } from '../Contatos';

export function Footer() {
  return (
    <footer className="container max-w-container mx-auto bottom-0 left-0 right-0">
      <Contatos />
      <section className="px-3 py-5 border-t-2 border-green-600">
        <p className=" text-xs md:text-lg font-semibold text-center">
          &copy; {new Date().getFullYear()}
          {' '} 
          Sabrísia Confecção - Todos os direitos reservados
        </p>
      </section>
    </footer>
  );
}
