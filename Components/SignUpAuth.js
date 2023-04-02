import {form_control, input, text, label, inputs, auth} from "../styles/Auth.module.css"
import {motion} from "framer-motion";

const attemptLogin = async () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let response = await fetch('https://go-jwt-auth-production.up.railway.app/users/signup', {
        method: 'POST',
        body: JSON.stringify({
            "fullName": "Henry Lotsu",
            "email": "gaga12bobo @gmail.com",
            "phone": "87383273232897",
            "password": "3979s3239",
            "role": "SHOPPER"
        }),
        headers: myHeaders,
        credentials: 'include'
    })
    await response.text()

    if (response.status === 409) {
        console.error("The email already exists in the db bro!")
    }
    if (response.status === 201) {
        console.log("Looks like you figured it out")
    }
    console.log(response.status)

}
const SignUpAuth = () => {

    return <form>
        <div className={inputs}>
            <div className={form_control}>
                <div className={input}>
                    <label className={label} htmlFor="name">Name</label>
                    <motion.input className={text} type="text" name="name" id="name"
                                  placeholder={"Enter your first name"} initial={{opacity: 0, y: "40px"}}
                                  animate={{opacity: 1, y: 0}}/>
                </div>
            </div>

            <div className={form_control}>
                <div className={input}>
                    <label className={label} htmlFor="email">Email</label>
                    <motion.input className={text} type="text" name="email" id="email" placeholder={"Enter your email"}
                                  initial={{opacity: 0, y: "40px"}} animate={{opacity: 1, y: 0}}/>
                </div>
            </div>


            <div className={form_control}>
                <div className={input}>
                    <label className={label} htmlFor="password">Password</label>
                    <motion.input className={text} type="password" name="password" id="password"
                                  placeholder={"**** (8 characters minimum) **** "} initial={{opacity: 0, y: "40px"}}
                                  animate={{opacity: 1, y: 0}}/>
                </div>
            </div>

            <div className={form_control}>
                <button className={auth} onClick={async (e) => {
                    e.preventDefault()
                    await attemptLogin()

                }} type={"submit"}>SignUp
                </button>
            </div>
        </div>
    </form>
}

export default SignUpAuth
