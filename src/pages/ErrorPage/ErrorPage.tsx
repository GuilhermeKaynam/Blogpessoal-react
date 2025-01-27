import React from "react";
import { FaTools, FaWrench, FaCog, FaHammer } from "react-icons/fa"; // Importando ícones de ferramentas
import { useNavigate } from "react-router-dom";

const WorkInProgress: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-96 text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-indigo-600 mb-4">
          Estamos Trabalhando Nisso
        </h1>
        <div className="space-y-4">
          <div className="text-6xl text-indigo-500">
            <FaTools className="animate-pulse" />
          </div>
          <p className="text-lg text-gray-600">
            Desculpe pelo transtorno. Estamos fazendo melhorias na página para
            oferecer uma experiência melhor.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-6">
          <FaWrench className="text-indigo-500 text-4xl" />
          <FaCog className="text-indigo-500 text-4xl" />
          <FaHammer className="text-indigo-500 text-4xl" />
        </div>

        <div className="mt-6">
          <button
            onClick={() => navigate("/home")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Voltar para a Página Inicial
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgress;
