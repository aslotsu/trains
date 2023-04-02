import {form_control, input, text, label, inputs, auth} from "../styles/Auth.module.css"
import {motion} from "framer-motion";

const LoginAuth = () => {
    const attemptLogin = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let response = await fetch('https://go-jwt-auth-production.up.railway.app/users/login',
            {
                method: "POST",
                body: JSON.stringify({
                    "email": "gaga12 bobo @gmail.com",
                    "phone": "8738327 3232897",
                    "password": "3979 s3239",
                }),
                headers: myHeaders,
                credentials: 'include'
            })
        await response.text()
        console.log(response.status)
        response.status === 200 && console.log("looks like it was successful, maybe")
    }

    const attemptLogout = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let response = await fetch('https://go-jwt-auth-production.up.railway.app/users/logout',
            {
                method: "POST",

            })
        await response.text()
        console.log(response.status)
        response.status === 200 && console.log("looks like it was successful, maybe, goodbye")
    }

    return <form>
        <div className={inputs}>
            <div className={form_control}>
                <div className={input}>
                    <label className={label} htmlFor="email">Email</label>
                    <motion.input className={text} type="text" name="email" id="email" placeholder={"Enter your email"}
                                  initial={{opacity: 0, y: "-40px"}} animate={{opacity: 1, y: 0}}/>
                </div>
            </div>


            <div className={form_control}>
                <div className={input}>
                    <label className={label} htmlFor="password">Password</label>
                    <motion.input className={text} type="password" name="password" id="password"
                                  placeholder={"**** (8 characters minimum) **** "} initial={{opacity: 0, y: "-40px"}}
                                  animate={{opacity: 1, y: 0}}/>
                </div>
            </div>

            <div className={form_control}>
                <button className={auth} onClick={async (e) => {
                    e.preventDefault()
                    await attemptLogin()
                }} type={"submit"}>Log In
                </button>

                <button className={auth} onClick={async (e) => {
                    e.preventDefault()
                    await attemptLogout()
                }} type={"submit"}>Log Out
                </button>
            </div>
        </div>
    </form>
}

export default LoginAuth