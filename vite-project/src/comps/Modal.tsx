    import { useContext } from "react";
    import ModalContext from "../context/contextModal";

    export default function Modal(){
    const {count, setCount} = useContext(ModalContext)
    const { openModal, setOpenModal } = useContext(ModalContext);
    const {nometf, setNometf} = useContext(ModalContext)
    const {list, setList} = useContext(ModalContext)
    const {nomeex, setNomeex} = useContext(ModalContext)

    console.log(openModal);
    console.log(nometf);    
console.log(list);
console.log(list[0]);


    const handleAdd = () => {
        setList((state: any) => [...state, nometf]);
      }
      const handleChange = (ix: string | number) => {
        let values = [list];
        values[ix][nometf] = values;
        setList((state: any) => [...values]);
      }
     
      function close(){
        setOpenModal(false);       
    }
   

        return(
            <>
                <div className="modalBackground">
                    <div className="modalContainer">
                        <div className="titleCloseBtn">
                            <button onClick={close}>x</button>
                        </div>
                        <div className="title">
                            <h1 className="inc">Incluir Tarefas</h1>
                        </div>
                        <div className="body">
            <div>
                <label>Nome:
                <input className="nometf" name="nometft" type="text" value={nometf} onChange={e => setNometf(e.target.value)}/>
                </label>
            </div>
                    </div>
                        <div className="footer">
                            <button onClick={handleAdd} >Adicionar</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }