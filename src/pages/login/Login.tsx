import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container bg-gradient-to-r from-[#7B68EE] via-[#4B0082] to-[#A020F0]">
      <div className="fundoLogin hidden lg:block"></div>
      <form className="flex justify-center items-center flex-col w-full gap-6 bg-white p-6 shadow-xl rounded-lg">
        <h2 className="text-indigo-600 text-3xl font-extrabold">Entrar</h2>

        <div className="flex flex-col w-full">
          <label
            htmlFor="usuario"
            className="text-sm font-semibold text-gray-600"
          >
            Usuário
          </label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Digite seu usuário"
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="senha"
            className="text-sm font-semibold text-gray-600"
          >
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="rounded-full text-white bg-indigo-500 hover:bg-indigo-600 w-full py-3 transition-all duration-300"
        >
          <Link
            to="/home"
            className="w-full h-full flex justify-center items-center"
          >
            Entrar
          </Link>
        </button>

        <hr className="border-slate-800 w-full" />

        <p>
          Ainda não tem uma conta?{" "}
          <a href="/cadastro" className="text-indigo-600 hover:text-indigo-800">
            Cadastre-se
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
