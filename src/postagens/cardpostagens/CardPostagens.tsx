import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Postagem from "../../models/Postagem";

interface CardPostagensProps {
  postagem: Postagem;
}

function CardPostagem({ postagem }: CardPostagensProps) {
  return (
    <div
      className="flex flex-col rounded-lg overflow-hidden shadow-lg border border-slate-900 
      bg-gradient-to-br from-[#7B68EE] via-[#4B0082] to-[#A020F0] text-white"
    >
      {/* Header com o usuário */}
      <div className="flex items-center gap-4 py-4 px-6 bg-opacity-90">
        <img
          src={postagem.usuario?.foto}
          alt={postagem.usuario?.nome}
          className="h-12 w-12 rounded-full border-2 border-white object-cover"
        />
        <h3 className="text-lg font-bold uppercase">
          {postagem.usuario?.nome}
        </h3>
      </div>

      {/* Conteúdo da postagem */}
      <div className="p-6 bg-white text-black">
        <h4 className="text-xl font-semibold uppercase mb-2">
          {postagem.titulo}
        </h4>
        <p className="text-sm mb-4">{postagem.texto}</p>
        <p className="text-sm font-medium">Tema: {postagem.tema?.descricao}</p>
        <p className="text-sm text-gray-600 mt-2">
          Data:{" "}
          {new Intl.DateTimeFormat(undefined, {
            dateStyle: "full",
            timeStyle: "medium",
          }).format(new Date(postagem.data))}
        </p>
      </div>

      {/* Botões */}
      <div className="flex gap-2 p-4 bg-gradient-to-r from-[#4B0082] to-[#7B68EE]">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="flex items-center justify-center gap-2 w-1/2 text-white py-2 px-4 
          bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 
          rounded-lg font-bold shadow-md transform hover:scale-105 transition-all duration-300"
        >
          <FaEdit className="text-lg" />
          Editar
        </Link>
        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="flex items-center justify-center gap-2 w-1/2 text-white py-2 px-4 
          bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 
          rounded-lg font-bold shadow-md transform hover:scale-105 transition-all duration-300"
        >
          <FaTrash className="text-lg" />
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
