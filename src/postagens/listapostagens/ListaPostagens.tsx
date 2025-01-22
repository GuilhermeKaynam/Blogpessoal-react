import { useNavigate } from "react-router-dom";
import CardPostagens from "../cardpostagens/CardPostagens";
import { useState, useContext, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import Postagem from "../../models/Postagem";
import { AuthContext } from "../../contexts/AuthContex";
import { buscar } from "../../service/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function ListaPostagens() {
  const navigate = useNavigate();

  const [postagens, setPostagens] = useState<Postagem[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPostagens() {
    try {
      await buscar("/postagens", setPostagens, {
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
      ToastAlerta("error", "Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);

  return (
    <>
      {postagens.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div
        className="container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {postagens.map((postagem) => (
          <CardPostagens key={postagem.id} postagem={postagem} />
        ))}
      </div>
    </>
  );
}

export default ListaPostagens;