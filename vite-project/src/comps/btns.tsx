import { useContext } from "react";
import ModalContext from "../context/contextModal";
import Modal from './Modal'
import Excluir from './Excluir'

export default function Btns(){
    const { openBtns, setBtns } = useContext(ModalContext);
    const { openModal, setOpenModal } = useContext(ModalContext);
    const { di, setDi } = useContext(ModalContext);
    const { openModale, setOpenModale } = useContext(ModalContext);

        if (openModal == true || openModale == true) {
            setDi("none")
          } else {
            setDi("inline")
          }  
          function close(){
            setBtns(false);       
        }
       
    return(
        <>
            <div className="modalBackground">
            <div className="titleCloseBtn"  style={{display: di}} >
                            <button onClick={close}>x</button>
                        </div>
                <div className="los" style={{display: di}} >
                <button onClick={()=> setOpenModal(true)}>Incluir Tarefas</button>
                    <button onClick={()=> setOpenModale(true)}>Excluir Tarefas</button>
                </div>
                {openModale && <Excluir />}
                {openModal && <Modal />}
            </div>
        </>
    );
}