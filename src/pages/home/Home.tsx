function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#7B68EE] via-[#4B0082] to-[#A020F0] flex justify-center flex-1">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 bg-clip-text text-transparent py-3">
              Seja Bem Vindo!
            </h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <div>
                <a
                  href="#"
                  className="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-orange-500 hover:text-yellow-100 hover:bg-slate-800 hover:border-slate-800 focus:text-orange-500 focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-orange-500 active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Nova Postagem
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem Página Home"
              className="w-2/2 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
