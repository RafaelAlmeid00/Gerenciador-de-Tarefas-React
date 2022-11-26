import {useNavigate} from 'react-router-dom'
import './cadastro.css'
import { BsGoogle } from "react-icons/all";
import { FaFacebookF } from "react-icons/all";
import { BsInstagram } from "react-icons/all";
import{ getAuth } from 'firebase/auth'
import { signInWithPopup } from 'firebase/auth'
import{ provider } from '../services/firebase'
import { useContext } from "react";
import ModalContext from "../context/contextModal";

const auth = getAuth()


function Login() {
    const navigate = useNavigate();
    const {user, setUser}  = useContext(ModalContext);
    const {email, setEmail} = useContext(ModalContext);
    const {foto, setFoto} = useContext(ModalContext);
    const {password, setPassword} = useContext(ModalContext);
    const { btndisplay, setBtnDisplay } = useContext(ModalContext);
    const {dis2, setDis2} = useContext(ModalContext);

   async function sigin(){

    const result = await signInWithPopup(auth, provider);
    console.log(result)

  setUser(result.user.displayName)
  setEmail(result.user.email)
  setFoto(result.user.photoURL)

  if (result != null || user != null && email != null && password != null) {
    setDis2("inline")
    setBtnDisplay(false)
    setTimeout(() => {
        navSite();
  }, 1000);
  }
  }
  function logar() {
    console.log(user);
      console.log(email);
      console.log(password);
    if (user != null && email != null && password != null) {
        setDis2("block")
        setBtnDisplay(false)
        setTimeout(() => {
            navSite();
      }, 1000);
      }
      
  }
    function navSite() {
        navigate('/')
    }

    return (
            <section className='secCad'>
            <div className="first-column">
                <div className='itens'> 
                <h2 className="title title-primary">Bem-vindo!</h2>
                <p className="description description-primary">Não possui cadastro?</p>
                <p className="description description-primary">Por favor cadastre-se na sua conta</p>
                <p className="description description-primary">para usar o Gerenciador de Tarefas</p>
                <p className="description description-primary">feito com: ReactJS</p>                
                </div>
            </div>    
            <div className="second-column">
                <h2 className="title title-second">Faça login</h2>
                <div className="social-media">
                    <ul className="list-social-media">
                        <a className="link-social-media" href="#">
                            <li className="item-social-media">
                                <FaFacebookF />        
                            </li>
                        </a>
                        <a className="link-social-media" href="#" onClick={sigin}>
                            <li className="item-social-media">
                                <BsGoogle />
                            </li>
                        </a>
                        <a className="link-social-media" href="#">
                            <li className="item-social-media">
                                <BsInstagram />
                            </li>
                        </a>
                    </ul>
                </div>
                <p className="description description-second">ou use seu email para se logar:</p>
                <section className="form">
                    <label className="label-input" htmlFor="">
                        <i className="far fa-user icon-modify"></i>
                        <input type="text" placeholder="Nome" value={user} onChange={e => setUser(e.target.value)}/>
                    </label>
                    
                    <label className="label-input" htmlFor="">
                        <i className="far fa-envelope icon-modify"></i>
                        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/> 
                    </label>
                    
                    <label className="label-input" htmlFor="">
                        <i className="fas fa-lock icon-modify"></i>
                        <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button className="btn btn-second" onClick={logar}>Entre</button>        
                </section>
            </div>
            </section>
    );
}

export default Login;