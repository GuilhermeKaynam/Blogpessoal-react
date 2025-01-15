function Navbar() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#7B68EE] via-[#4B0082] to-[#A020F0] text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="font-bold">Blog Pessoal</div>
          <div className="flex gap-4">
            <a
              href="/postagens"
              className="hover:text-orange-400 transition duration-300"
            >
              Postagens
            </a>
            <a
              href="/temas"
              className="hover:text-orange-400 transition duration-300"
            >
              Temas
            </a>
            <a
              href="/cadastrar-tema"
              className="hover:text-orange-400 transition duration-300"
            >
              Cadastrar Tema
            </a>
            <a
              href="/perfil"
              className="hover:text-orange-400 transition duration-300"
            >
              Perfil
            </a>
            <a
              href="/sair"
              className="hover:text-red-600 transition duration-300"
            >
              Sair
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
