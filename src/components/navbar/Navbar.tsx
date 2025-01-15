function Navbar() {
  return (
    <>
      <div className="sticky top-0 w-full bg-gradient-to-r from-[#7B68EE] via-[#4B0082] to-[#A020F0] text-white flex justify-center py-4 z-50">
        <div className="container flex justify-between text-lg">
          <div className="font-bold">Blog Pessoal</div>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Postagens
            </a>
            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Temas
            </a>
            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Cadastrar Tema
            </a>
            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Perfil
            </a>
            <a href="#" className="hover:text-red-600 transition duration-300">
              Sair
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
