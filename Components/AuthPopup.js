import {full, overlay, form_control, input, text, label} from "../styles/Auth.module.css"
import CloseSvg from "@/Components/CloseSvg";
import SignUpAuth from "@/Components/SignUpAuth";
import LoginAuth from "@/Components/LoginAuth";

const AuthPopup = () => {


    return<div className={overlay}>
        <div className={full}>
            <CloseSvg />
            {/*<SignUpAuth />*/}
            <LoginAuth />
        </div>
    </div>
 
 }
 
 export default AuthPopup