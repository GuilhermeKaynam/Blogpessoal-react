import Tema from "./Tema";
import Usuario from "./usuario";

export default interface Postagem {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    usuario: any; 
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema: Tema | null;
    Postagem: Usuario | null
}