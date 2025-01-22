import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo, // Importando o ícone do GitHub
} from "@phosphor-icons/react";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContex";

function Footer() {
  const data = new Date().getFullYear();
  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div className="flex justify-between items-center bg-gradient-to-r from-[#4952ac] via-[#0a045e] to-[#5d3a96] text-white mt-auto py-6 px-6">
        <div className="flex flex-col items-center text-center flex-grow">
          <p className="text-sm font-bold">
            Blog Pessoal Guilherme Kaynam | Copyright: {data}
          </p>
          <p className="text-sm">Acesse nossas redes sociais</p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/guilherme-kaynam/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300"
          >
            <LinkedinLogo
              size={32}
              weight="bold"
              className="hover:text-blue-700 transition-all duration-300"
            />
          </a>

          <a
            href="https://www.instagram.com/guikaynam/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300"
          >
            <InstagramLogo
              size={32}
              weight="bold"
              className="hover:text-orange-500 transition-all duration-300"
            />
          </a>

          <a
            href="https://github.com/GuilhermeKaynam"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300"
          >
            <GithubLogo
              size={32}
              weight="bold"
              className="hover:text-black transition-all duration-300"
            />
          </a>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Footer;
