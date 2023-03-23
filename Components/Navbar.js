import {bar, auth} from "../styles/Navbar.module.css"
import {useDispatch, useSelector} from "react-redux";
import {changeForm, toggle} from "@/store/features/modal";
const Navbar = () => {
    const openModal = useSelector(state => state.modal.open)
    const hasAccount = useSelector(state => state.modal.hasAccount)

    const dispatch = useDispatch()

    return <nav className={bar}>
        <h1>Countries App</h1>
       <div>
           <button className={auth} onClick={()=> {
               console.log(openModal)
               dispatch(toggle())
               hasAccount && dispatch(changeForm())
           }}>Login</button>
           <button  className={auth} onClick={()=>{
               console.log(openModal)
               dispatch(toggle())
               dispatch(changeForm())
               hasAccount && dispatch(changeForm())
           }}>Register</button>
       </div>
    </nav>

}

export default Navbar

