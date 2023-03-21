import {bar, auth} from "../styles/Navbar.module.css"
import {useDispatch, useSelector} from "react-redux";
import {toggle} from "@/store/features/modal";
import {log} from "next/dist/server/typescript/utils";
const Navbar = () => {
    const openModal = useSelector(state => state.modal.open)

    const dispatch = useDispatch()

    return <nav className={bar}>
        <h1>Countries App</h1>
       <div>
           <button className={auth} onClick={()=> {
               console.log(openModal)
               dispatch(toggle())
           }}>Login</button>
           <button  className={auth} onClick={()=>{
               console.log(openModal)
               dispatch(toggle())
           }}>Register</button>
       </div>
    </nav>

}

export default Navbar

