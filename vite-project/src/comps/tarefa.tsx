interface typeDiv{
    text:string;
    num?:number;
}

import '../App.css'
import { GrTasks } from "react-icons/all";

function Tarefa(props : typeDiv) {

    return(
        <div className='tarefa'>
            <h2>{props.text}</h2>
            <GrTasks className='trash'/>
            </div>
    );
}

export default Tarefa