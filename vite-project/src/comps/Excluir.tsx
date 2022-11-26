import { useContext } from "react";
import ModalContext from "../context/contextModal";

export default function Excluir(){
const {count, setCount} = useContext(ModalContext)
const { openModal, setOpenModal } = useContext(ModalContext);
const {nometf, setNometf} = useContext(ModalContext)
const {list, setList} = useContext(ModalContext)
const {nomeex, setNomeex} = useContext(ModalContext)
const { openModale, setOpenModale } = useContext(ModalContext);

console.log(openModal);
console.log(nometf);    
console.log(list);

  const remove = () => {
    var indice = list.indexOf(nomeex);
    while(indice >= 0){
        list.splice(indice, 1);
        indice = list.indexOf(nomeex);
        console.log(indice);
        console.log(list);
    let filtered = list.filter((list: any, index: any) => index !== (list))
    setList([...filtered])
}
}
    function close(){
        setOpenModale(false);       
    }
   

    return(
        <>
            <div className="modalBackground">
                <div id="N" className="modalContainer">
                <div className="titleCloseBtn">
                            <button onClick={close}>x</button>
                        </div>
                    <div className="title">
                        <h1 className="inc">Excluir Tarefas</h1>
                    </div>
                    <div className="body">
        <div>
            <label>Nome:
            <input className="nometf" name="nomeex" type="text" value={nomeex} onChange={e => setNomeex(e.target.value)}/>
            </label>
        </div>
                </div>
                    <div className="footer">
                        <button onClick={remove}>Deletar</button>
                    </div>
                </div>
            </div>
        </>
    );
}