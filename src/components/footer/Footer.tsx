import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-gradient-to-r from-[#4952ac] via-[#0a045e] to-[#5d3a96] text-white  mt-auto">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog Pessoal Guilherme Kaynam | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
            >
              <LinkedinLogo
                size={48}
                weight="bold"
                className="text-blue-600 hover:text-blue-700 transition-all duration-300"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
            >
              <div className="bg-gradient-to- rounded-full p-[2px] transition-all duration-300">
                <InstagramLogo
                  size={48}
                  weight="bold"
                  className="text-red-600 hover:text-orange-500 transition-all duration-300"
                />
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
            >
              <FacebookLogo
                size={48}
                weight="bold"
                className="text-blue-600 hover:text-blue-800 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
