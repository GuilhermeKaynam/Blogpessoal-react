import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { House } from "@phosphor-icons/react";
import { AuthContext } from "../../contexts/AuthContex";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div className="sticky top-0 w-full bg-gradient-to-r from-[#7B68EE] via-[#4B0082] to-[#A020F0] text-white flex justify-center py-4 z-50">
        <div className="container flex justify-between items-center text-lg">
          <div className="flex items-center gap-2 font-bold">
            <Link
              to="/home"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <House size={32} weight="bold" className="text-yellow-400" />
              Blog Pessoal
            </Link>
          </div>

          <div className="flex gap-4">
            <Link
              to="/postagens"
              className="hover:text-orange-400 transition duration-300 hover:underline"
            >
              Postagens
            </Link>
            <Link
              to="/temas"
              className="hover:text-orange-400 transition duration-300 hover:underline"
            >
              Temas
            </Link>
            <Link
              to="/cadastrartema"
              className="hover:text-orange-400 transition duration-300 hover:underline"
            >
              Cadastrar Tema
            </Link>
            <Link
              to="/perfil"
              className="hover:text-orange-400 transition duration-300 hover:underline"
            >
              Perfil
            </Link>
            <Link
              to=""
              onClick={logout}
              className="hover:text-red-600 transition duration-300 hover:underline"
            >
              Sair
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Navbar;
