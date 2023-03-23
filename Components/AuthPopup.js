import {overlay, full} from "../styles/Auth.module.css"
import CloseSvg from "@/Components/CloseSvg";
import SignUpAuth from "@/Components/SignUpAuth";
import { motion} from "framer-motion";
import LoginAuth from "@/Components/LoginAuth";
import {useDispatch, useSelector} from "react-redux";
import {changeForm} from "@/store/features/modal";

const AuthPopup = ({}) => {
    const dispatch = useDispatch()
    const hasAccount = useSelector(state => state.modal.hasAccount)


    return<motion.div className={overlay} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity  : 0, transition: {duration: 0.17}}}>
        <motion.div className={full} initial={{opacity: 0, y: "20vh"}} animate={{opacity: 1, y: "0"}} exit={{opacity: 0, y: "10vh", transition: {duration: 0.2}}}>
            <CloseSvg />
                { hasAccount ?<SignUpAuth /> :
                    <LoginAuth/>}
            <button  onClick={()=> {dispatch(changeForm())}}>
                {hasAccount ? "LogIn Instead": "Sign Up Instead"}
            </button>
        </motion.div>
    </motion.div>
 
 }
 
 export default AuthPopup