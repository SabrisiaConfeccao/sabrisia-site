import { Contatos } from "../Contatos";

export function Footer() {
  return (
    <footer className="max-w-container mx-auto bottom-0 left-0 right-0">
      <Contatos />
      <section className="px-3 py-5 border-t-2 border-green-600">
      <p className="font-semibold text-center">&copy; 2025 Sabrísia Confecção - Todos os direitos reservados</p>
      </section>
    </footer>
  );
}