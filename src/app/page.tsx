import { Contatos } from "./components/Contatos";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home as HomeComponent } from "./components/Home";
import { Produtos } from "./components/Produtos";
import { Sobre } from "./components/Sobre";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <HomeComponent />
        <Sobre />
        <Produtos />
        <Contatos />
      </main>
      <Footer />
    </>
  );
}
