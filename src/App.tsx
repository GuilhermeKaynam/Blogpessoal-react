import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        {" "}
        {/* Isso faz o conteúdo principal ocupar o restante do espaço */}
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
