import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContex";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta("Você precisa estar logado", "erro");
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="container mx-auto p-6 max-w-3xl bg-white rounded-3xl shadow-lg mt-12">
      <div className="relative">
        <img
          className="w-full h-72 object-cover rounded-2xl"
          src="https://img.freepik.com/fotos-gratis/seascape-fantastico-com-ondulacoes_1232-424.jpg?t=st=1737563513~exp=1737567113~hmac=2c8c03fd104a0c46566c2b8c24bbaf302e0d271116d479097f77f746a5c7d5f8&w=1380"
          alt="Capa do Perfil"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            className="rounded-full w-36 h-36 border-4 border-white bg-white shadow-xl"
            src={usuario.foto}
            alt={`Foto de perfil de ${usuario.nome}`}
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">{usuario.nome}</h2>
        <p className="text-xl text-gray-600">{usuario.usuario}</p>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate("/ErrorPage")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Editar Perfil
        </button>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="font-medium text-lg text-gray-700">
            Nome Completo:
          </span>
          <span className="text-lg text-gray-500">{usuario.nome}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-lg text-gray-700">Email:</span>
          <span className="text-lg text-gray-500">{usuario.usuario}</span>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
