import {form_control, input, text, label, inputs, auth} from "../styles/Auth.module.css"
import {motion} from "framer-motion";

const SignUpAuth = () => {
    return <form>
        <div className={inputs}>
            <div className={form_control}>
                <div className={input}>
                    <label className={label} htmlFor="name">Name</label>
                    <motion.input className={text} type="text" name="name" id="name" placeholder={"Enter your first name"} initial={{opacity: 0,y: "40px"}} animate={{opacity: 1,y: 0}}/>
                </div>
            </div>

            <div className={form_control}>
                <div className={input}>
                    <label className={label} htmlFor="email">Email</label>
                    <motion.input className={text} type="text" name="email" id="email" placeholder={"Enter your email"} initial={{opacity: 0,y: "40px"}} animate={{opacity: 1,y: 0}}/>
                </div>
            </div>


            <div className={form_control}>
                <div className={input}>
                    <label className={label} htmlFor="password">Password</label>
                    <motion.input className={text} type="password" name="password" id="password" placeholder={"**** (8 characters minimum) **** "} initial={{opacity: 0,y: "40px"}} animate={{opacity: 1,y: 0}}/>
                </div>
            </div>

            <div className={form_control}>
                <button className={auth} onClick={(e)=> {
                    e.preventDefault()
                    console.log("Yes please we can go")
                }} type={"submit"}>SignUp</button>
            </div>
        </div>
    </form>

}

export default SignUpAuth