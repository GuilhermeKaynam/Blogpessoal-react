import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Tema from "../../models/Tema";
import Postagem from "../../models/Postagem";
import { AuthContext } from "../../contexts/AuthContex";
import { atualizar, buscar, cadastrar } from "../../service/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function FormPostagem() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [temas, setTemas] = useState<Tema[]>([]);

  const [tema, setTema] = useState<Tema>({ id: 0, descricao: "" });
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPostagemPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, {
        headers: { Authorization: token },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  async function buscarTemaPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: { Authorization: token },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  async function buscarTemas() {
    try {
      await buscar("/temas", setTemas, {
        headers: { Authorization: token },
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
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();

    if (id !== undefined) {
      buscarPostagemPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate("/postagens");
  }

  async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlerta("Postagem atualizada com sucesso", "sucesso");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar a Postagem", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlerta("Postagem cadastrada com sucesso", "sucesso");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar a Postagem", "erro");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  const carregandoTema = tema.descricao === "";

  return (
    <div className="container mx-auto flex flex-col items-center p-6 bg-white rounded-xl shadow-lg max-w-3xl mt-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {id !== undefined ? "Editar Postagem" : "Cadastrar Postagem"}
      </h1>

      <form className="w-full space-y-6" onSubmit={gerarNovaPostagem}>
        {/* Título da Postagem */}
        <div className="flex flex-col">
          <label
            htmlFor="titulo"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Título da Postagem
          </label>
          <input
            type="text"
            placeholder="Digite o título"
            name="titulo"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={postagem.titulo}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => atualizarEstado(e)}
          />
        </div>

        {/* Texto da Postagem */}
        <div className="flex flex-col">
          <label
            htmlFor="texto"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Texto da Postagem
          </label>
          <textarea
            placeholder="Digite o conteúdo"
            name="texto"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={postagem.texto}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => atualizarEstado(e)}
          />
        </div>

        {/* Tema da Postagem */}
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Tema da Postagem
          </label>
          <select
            name="tema"
            id="tema"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => buscarTemaPorId(e.currentTarget.value)}
          >
            <option value="" disabled selected>
              Selecione um Tema
            </option>
            {temas.map((tema) => (
              <option key={tema.id} value={tema.id}>
                {tema.descricao}
              </option>
            ))}
          </select>
        </div>

        {/* Botão de Envio */}
        <div className="flex justify-center">
          <button
            type="submit"
            className={`w-full sm:w-1/2 px-6 py-3 rounded-lg text-white font-semibold text-lg focus:outline-none transition duration-300 ease-in-out ${
              carregandoTema
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
            disabled={carregandoTema}
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
              <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPostagem;
