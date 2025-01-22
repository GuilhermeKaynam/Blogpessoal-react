import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Postagem from "../../models/Postagem";
import { AuthContext } from "../../contexts/AuthContex";
import { buscar, deletar } from "../../service/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function DeletarPostagem() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "erro");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarPostagem() {
    setIsLoading(true);

    try {
      await deletar(`/postagens/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      ToastAlerta("Postagem apagada com sucesso", "sucesso");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar a postagem.", "erro");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/postagens");
  }

  return (
    <div className="container w-1/3 mx-auto mt-10">
      <h1 className="text-4xl text-center my-4 bg-clip-text text-transparent bg-gradient-to-r from-[#7B68EE] via-[#4B0082] to-[#A020F0] font-bold">
        Deletar Postagem
      </h1>

      <p className="text-center font-semibold mb-4 text-gray-700">
        Você tem certeza de que deseja apagar a postagem a seguir?
      </p>

      <div className="border rounded-2xl overflow-hidden shadow-lg">
        <header className="py-2 px-6 bg-gradient-to-r from-[#7B68EE] via-[#4B0082] to-[#A020F0] text-white font-bold text-2xl">
          Postagem
        </header>
        <div className="p-6 bg-gray-50">
          <p className="text-xl font-semibold text-gray-800">
            {postagem.titulo}
          </p>
          <p className="text-gray-600 mt-2">{postagem.texto}</p>
        </div>
        <div className="flex">
          <button
            className="w-1/2 text-white bg-red-400 hover:bg-red-600 py-3 font-bold transition-all duration-300"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-1/2 text-white bg-gradient-to-r from-[#7B68EE] via-[#4B0082] to-[#A020F0] hover:opacity-80 py-3 font-bold flex items-center justify-center transition-all duration-300"
            onClick={deletarPostagem}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarPostagem;
