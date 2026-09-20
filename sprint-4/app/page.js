import NavBar from "./components/NavBar";
import Apresentacao from "./components/Apresentacao";
import Publico from "./components/Publico";
import Footer from "./components/Footer";
import FormularioApoio from "./components/Formulario";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Apresentacao />
        <Publico />
        <FormularioApoio />
      </main>
      <Footer />
      

    </>
  );
}
