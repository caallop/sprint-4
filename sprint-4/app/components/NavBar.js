import Image from "next/image";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-bar container">
        <div className="logo">
          <a href="#">
            {" "}
            <Image
              src="/img/generic/logo.svg"
              alt="Logo Travelgam"
              width={150}
              height={50}
            />
          </a>
        </div>
        <ul>
          <li>
            <a href="#contato">Contato</a>
          </li>
          <li>
            <a href="https://github.com/caallop/sprint-3-front-end">
              Repositório do site
            </a>
          </li>
          <li>
            <a href="#publico">Público-Alvo</a>
          </li>
          <li>
            <a href="#solucao"> Solução</a>
          </li>
          <li>
            <a href="#equipe"> Equipe</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
