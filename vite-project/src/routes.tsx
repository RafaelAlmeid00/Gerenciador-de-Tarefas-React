import { BrowserRouter, Routes, Route } from "react-router-dom";
import Site from "./pages/App";
import Login from "./pages/login";
import { useState } from "react";
import ModalContext from './context/contextModal';


function RoutesApp(){
    const [ openModal, setOpenModal ] = useState<boolean>(false);
    const [ openModale, setOpenModale ] = useState<boolean>(false);
    const [ openBtns, setBtns ] = useState<boolean>(false);
    const [ count, setCount ] = useState<string>("");
    const [ di, setDi ] = useState<string>("");
    const [nometf, setNometf] = useState<string>("");
    const [list, setList] = useState([])
    const [nomeex, setNomeex] = useState<string>("");
    const [user, setUser]  = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [foto, setFoto] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [ btndisplay, setBtnDisplay] = useState<boolean>(true);
    const [dis2, setDis2] = useState<string>("none");

    return (
        <BrowserRouter>
            <ModalContext.Provider  value={ {openModal, di, dis2, setDis2, openModale, setOpenModale, setDi, openBtns, setBtns, user, email, foto, password, btndisplay, setUser, setEmail, setFoto, setPassword, setBtnDisplay, count, nometf, nomeex, setNomeex,  list, setOpenModal, setList,setNometf, setCount}}>
                <Routes>
                <Route path='/' element={<Site/>}/>
                <Route path='/login' element={<Login />}/>
                </Routes>
                </ModalContext.Provider>
        </BrowserRouter>
    )
}

export default RoutesApp