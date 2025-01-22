import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContex";
function Footer() {
  const data = new Date().getFullYear();
  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div className="flex justify-center bg-gradient-to-r from-[#4952ac] via-[#0a045e] to-[#5d3a96] text-white mt-auto py-9">
        <div className="container flex flex-col items-center text-center">
          <p className="text-xl font-bold">
            Blog Pessoal Guilherme Kaynam | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/school/generationbrasil"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
            >
              <LinkedinLogo
                size={48}
                weight="bold"
                className="hover:text-blue-700 transition-all duration-300"
              />
            </a>

            <a
              href="https://www.instagram.com/generationbrasil"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
            >
              <InstagramLogo
                size={48}
                weight="bold"
                className="hover:text-orange-500 transition-all duration-300"
              />
            </a>

            <a
              href="https://www.facebook.com/generationbrasil"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
            >
              <FacebookLogo
                size={48}
                weight="bold"
                className="hover:text-blue-800 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Footer;
