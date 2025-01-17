import Tema from "./Tema";
import Usuario from "./usuario";

export default interface Postagem { 
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema: Tema | null;
    Postagem: Usuario | null
}