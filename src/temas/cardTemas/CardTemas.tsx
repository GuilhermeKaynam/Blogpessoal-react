import { Link } from "react-router-dom";
import Tema from "../../models/Tema";

interface CardTemasProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-gradient-to-r from-purple-400 to-red-500 0 text-white font-bold text-2xl">
        Tema
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{tema.descricao}</p>

      <div className="flex">
        <Link
          to={`/editartema/${tema.id}`}
          className="w-full text-slate-100 bg-gradient-to-r from-orange-700 to-orange-600 
             hover:from-orange-600 hover:to-orange-700 
             flex items-center justify-center py-2"
        >
          Editar
        </Link>

        <Link
          to={`/deletartema/${tema.id}`}
          className="w-full text-slate-100 bg-gradient-to-r from-red-700 to-red-600 
             hover:from-red-600 hover:to-red-700 
             flex items-center justify-center py-2"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;
