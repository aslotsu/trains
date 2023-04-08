import {bar, auth} from "../styles/Navbar.module.css"
import {useDispatch, useSelector} from "react-redux";
import {changeForm, logout, toggle} from "@/store/features/modal";
import {useRouter} from "next/navigation";
const Navbar = () => {
    const openModal = useSelector(state => state.modal.open)
    const hasAccount = useSelector(state => state.modal.hasAccount)
    const loggedInUser = useSelector(state => state.modal.isLoggedIn)
    const router = useRouter()
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


    const dispatch = useDispatch()

    return <nav className={bar}>
        <h1>Countries App</h1>
       <div>
           {!loggedInUser ?<> <button className={auth} onClick={()=> {
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
               </>
           : <button className={auth} onClick={async ()=> {
                   await attemptLogout()
                   await getUser()
                   router.refresh()
           }
               }>Log tf out</button>}
       </div>
    </nav>

}

export default Navbar

