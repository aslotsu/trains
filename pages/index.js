import AuthPopup from "@/Components/AuthPopup";
import {useDispatch, useSelector} from "react-redux";
import Portal from "@/Components/Portal";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
import {login} from "@/store/features/modal";

const index = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const loggedInUser = useSelector(state => state.modal.isLoggedIn)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()


    const getUser = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let response = await fetch('https://go-jwt-auth-production.up.railway.app/users/get-user', {
            method: 'GET',
            redirect: "follow",
            headers: myHeaders,
            credentials: "include"
        })
        const final = await response.json()
        console.log("Final result",final.email)
        console.log("Running get user from page first render")
        setName(final.email)

        console.log("Email of logged in user", final.email)
        {response.status === 200 && console.log("The user has been got")}
        {final && dispatch(login())}

    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( () => {
        {
            !loggedInUser && getUser()
        }
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState(null)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const openModal = useSelector(state => state.modal.open)
    return <main>
      <h1 style={{textAlign: "center"}}>Countries received from rest api</h1>

        <AnimatePresence>
            {openModal && <Portal >
                <AuthPopup as={motion.div} />
            </Portal>}
            {loggedInUser && <h1>Welcome {name} to the app dear user!</h1>}

        </AnimatePresence>
    </main>
}

export default index