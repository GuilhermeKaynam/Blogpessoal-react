function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#7B68EE] via-[#4B0082] to-[#A020F0] flex justify-center flex-1">
        {" "}
        {/* Adicionado flex-1 */}
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
              Seja Bem Vindo!
            </h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <div>
                <button className="rounded text-white border-white border-solid border-2 py-2 px-4 bg-blue-500 hover:bg-blue-700 transition duration-300">
                  Nova Postagem
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
