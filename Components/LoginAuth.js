import {form_control, input, text, label, inputs, auth} from "../styles/Auth.module.css"
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {login, logout} from "@/store/features/modal";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";


const LoginAuth = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()
    const attemptLogin = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let response = await fetch('https://go-jwt-auth-production.up.railway.app/users/login',
            {
                method: "POST",
                body: JSON.stringify({
                    "email": "gaga12bobo @gmail.com",
                    "phone": "87383273232897",
                    "password": "3979s3239",
                }),
                headers: myHeaders,
                credentials: 'include'
            })
        console.log(response.status)
        dispatch(login())
        response.status === 200 && console.log("looks like it was successful, maybe")
    }

    const getUser = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let response = await fetch('https://go-jwt-auth-production.up.railway.app/users/get-user', {
            method: 'GET',
            redirect: "follow",
            headers: myHeaders,
            credentials: "include"
        })
        // const final = await response.json()
        // console.log("Final result",final.email)
        // console.log("Email of logged in user", final.email)
        // response.status === 200 && console.log("The user has been got")
        console.log(response)
        if (response.status === 404) {
            console.log("Looks like the logging out might have worked")
            dispatch(logout())
        }
        console.log("User may have been successfully logged out")
    }

    const attemptLogout = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let response = await fetch('https://go-jwt-auth-production.up.railway.app/users/logout',
            {
                method: "POST",
                credentials: 'include'

            })
        await response.text()
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
                    await getUser()
                }} type={"submit"}>Log Out
                </button>
            </div>
        </div>
    </form>
}

export default LoginAuth