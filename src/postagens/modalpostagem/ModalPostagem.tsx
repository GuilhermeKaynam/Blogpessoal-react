import Popup from "reactjs-popup";
import FormPostagem from "../formpostagem/FormPostagem";

import "reactjs-popup/dist/index.css";
import "./ModalPostagem.css";

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button className="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-orange-500 hover:text-yellow-100 hover:bg-slate-800 hover:border-slate-800 focus:text-orange-500 focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-orange-500 active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Nova Postagem
          </button>
        }
        modal
      >
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;
