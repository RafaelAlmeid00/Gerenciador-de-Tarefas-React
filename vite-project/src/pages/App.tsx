import '../App.css'
import  "../index.css";
import {useNavigate} from 'react-router-dom'
import Tarefa from "../comps/tarefa";
import ModalContext from '../context/contextModal';
import Modal from '../comps/Modal'
import { useContext } from 'react';
import Btns from '../comps/btns'
import { useState } from "react";

function App() {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const {count, setCount} = useContext(ModalContext);
  const {list, setList} = useContext(ModalContext);
  const {user, setUser}  = useContext(ModalContext);
  const {email, setEmail} = useContext(ModalContext);
  const {foto, setFoto} = useContext(ModalContext);
  const {password, setPassword} = useContext(ModalContext);
  const { btndisplay, setBtnDisplay } = useContext(ModalContext);
  const { openBtns, setBtns } = useContext(ModalContext);
  const { openModale, setOpenModale } = useContext(ModalContext);
  const {dis2, setDis2} = useContext(ModalContext);

    const navigate = useNavigate();

    if (openModal == true || openModale == true || openBtns == true) {
      setCount("none")
    } else {
      setCount("inline")
    }   

   
    function navLogin() {
      navigate('/login');
  }

  return (
    <div className="App">
      <header>
        <div className='btns'>
        {btndisplay && <button onClick={navLogin}>Conecte-se</button>}
        </div>
        <div className='til'>
          <h1>Gerenciador de Tarefas</h1>
          <p id='u' style={{display: dis2}}>Bem-vindo: {user}</p>
        </div>
        </header>

        <section className='main'>
          <div className='add'>
          <button style={{display: count}} onClick={()=>{setBtns(true);}}>
        +</button>
        {openBtns && <Btns/>}
          </div>
          <section id='comps'>
          {list.map((list:any) => <Tarefa text={list} />)}
          </section>
        </section>
    </div>
  )
}

export default App
