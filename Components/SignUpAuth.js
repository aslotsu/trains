
import {full, overlay, form_control, input, text, label} from "../styles/Auth.module.css"

const SignUpAuth = () => {
    return <form>
        <div className={form_control}>
            <div className={input}>
                <label className={label} htmlFor="name">Name</label>
                <input className={text} type="text" name="name" id="name" placeholder={"Enter your first name"}/>
            </div>
        </div>

        <div className={form_control}>
            <div className={input}>
                <label className={label} htmlFor="email">Email</label>
                <input className={text} type="text" name="email" id="email" placeholder={"Enter your email"}/>
            </div>
        </div>


        <div className={form_control}>
            <div className={input}>
                <label className={label} htmlFor="password">Password</label>
                <input className={text} type="password" name="password" id="password" placeholder={"**** (8 characters minimum) **** "}/>
            </div>
        </div>

        <div className={form_control}>
            <button onClick={(e)=> {
                e.preventDefault()
                console.log("Yes please we can go")
            }} type={"submit"}>SignUp</button>
        </div>
    </form>

}

export default SignUpAuth