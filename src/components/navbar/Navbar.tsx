import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { House } from "@phosphor-icons/react";
import { AuthContext } from "../../contexts/AuthContex";

function Navbar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("./");
  }

  return (
    <div className="sticky top-0 w-full bg-gradient-to-r from-[#7B68EE] via-[#4B0082] to-[#A020F0] text-white flex justify-center py-4 z-50">
      <div className="container flex justify-between items-center text-lg">
        <div className="flex items-center gap-2 font-bold">
          <a href="/" className="flex items-center gap-2">
            <House size={32} weight="bold" className="text-yellow-400" />
            Blog Pessoal
          </a>
        </div>

        <div className="flex gap-4">
          <Link
            to="/home"
            className="hover:text-orange-400 transition duration-300"
          >
            Postagens
          </Link>
          <Link
            to="/temas"
            className="hover:text-orange-400 transition duration-300"
          >
            Temas
          </Link>
          <Link
            to="/cadastrartema"
            className="hover:text-orange-400 transition duration-300"
          >
            Cadastrar Tema
          </Link>
          <Link
            to="/perfil"
            className="hover:text-orange-400 transition duration-300"
          >
            Perfil
          </Link>
          <Link
            to=""
            onClick={logout}
            className="hover:text-red-600 transition duration-300"
          >
            Sair
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
