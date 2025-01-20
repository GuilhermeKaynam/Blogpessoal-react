import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../models/Tema";
import { AuthContext } from "../../contexts/AuthContex";
import { atualizar, buscar, cadastrar } from "../../service/Service";

function FormTema() {
  const navigate = useNavigate();

  const [tema, setTema] = useState<Tema>({} as Tema);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
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

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/temas");
  }

  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/temas`, tema, setTema, {
          headers: { Authorization: token },
        });
        alert("O Tema foi atualizado com sucesso!");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          alert("Erro ao atualizar o tema.");
        }
      }
    } else {
      try {
        await cadastrar(`/temas`, tema, setTema, {
          headers: { Authorization: token },
        });
        alert("O Tema foi cadastrado com sucesso!");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          alert("Erro ao cadastrar o tema.");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto ">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Tema" : "Editar Tema"}
      </h1>

      <form
        className="w-1/2 flex flex-col gap-6 p-6 bg-gradient-to-r from-[#161420] via-[#37164e] to-[#A020F0]
             rounded-2xl shadow-lg text-white"
        onSubmit={gerarNovoTema}
      >
        <div className="flex flex-col gap-3 ">
          <label htmlFor="descricao" className="font-semibold text-lg">
            Descrição do Tema
          </label>
          <input
            type="text"
            placeholder="Descreva aqui seu tema"
            name="descricao"
            className="border-2 border-black bg-transparent rounded-lg p-3 text-white 
                 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-900"
            value={tema.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded-lg text-white bg-gradient-to-r from-[#332a69] via-[#070722] to-[#66227c] 
           hover:from-[#4b388a] hover:via-[#1a1a3b] hover:to-[#8231a3]
           w-1/2 py-3 mx-auto flex justify-center items-center shadow-md transition-all duration-300"
          type="submit"
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
            <span className="font-bold">
              {id === undefined ? "Cadastrar" : "Atualizar"}
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormTema;
