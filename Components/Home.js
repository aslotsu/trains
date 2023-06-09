import {useDispatch, useSelector} from "react-redux";
import {useEffect,  useState} from "react";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
import {login} from "@/store/features/modal";
import {AnimatePresence, motion} from "framer-motion";
import Portal from "@/Components/Portal";
import AuthPopup from "@/Components/AuthPopup";
import toast from "react-hot-toast";


const Home = () => {

    const notify = () => toast.success("Login was successful, continue")



    const loggedInUser = useSelector(state => state.modal.isLoggedIn)
    const dispatch = useDispatch()

    useEffect(()=> {
        !loggedInUser && (
            async () => {
                let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                let response = await fetch('https://go-jwt-auth-production.up.railway.app/users/get-user', {
                    method: 'GET',
                    redirect: "follow",
                    headers: myHeaders,
                    credentials: "include"
                })
                const final = await response.json()
                console.log("Running get user from page first render")
                setName(final.email)
                console.log("Response from get user call", final)
                {
                    response.status === 200 && dispatch(login()) && notify()
                }
                {
                    final && console.log("The user has been got")
                }

            }
        )()
    }, [dispatch, loggedInUser])

    const [name, setName] = useState(null)

    const openModal = useSelector(state => state.modal.open)
    return <main>
        <h1 style={{textAlign: "center"}}>Countries received from rest api</h1>

        <AnimatePresence>
            {openModal && <Portal >
                <AuthPopup as={motion.div} />
            </Portal>}
            {loggedInUser && <h1 onClick={notify}>Welcome {name} to the app dear user!</h1>}

        </AnimatePresence>
    </main>

}

export default Home