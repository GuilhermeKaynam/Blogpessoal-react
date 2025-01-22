import ListaPostagens from "../../postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../postagens/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#7B68EE] via-[#4B0082] to-[#A020F0] flex justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 text-white">
          {/* Parte de texto (centralizada no mobile e na versão desktop) */}
          <div className="flex flex-col gap-4 items-center justify-center py-4 text-center md:text-left">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent py-3">
              Seja Bem Vindo!
            </h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalPostagem />
              </div>
            </div>
          </div>

          {/* Parte da imagem (oculta no mobile, visível apenas no desktop) */}
          <div id="imagem" className="flex justify-center md:block hidden">
            <img
              src="./home.png"
              alt="Imagem da Página Home"
              className="w-full md:w-6/12" // Ajuste o tamanho conforme necessário
            />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
