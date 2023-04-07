import AuthPopup from "@/Components/AuthPopup";
import { useSelector} from "react-redux";
import Portal from "@/Components/Portal";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

const index = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const loggedInUser = useSelector(state => state.modal.isLoggedIn)

    const getUser = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let response = await fetch('https://go-jwt-auth-production.up.railway.app/users/get-user', {
            method: 'GET',
            redirect: "follow"
        })
        const final = await response.text()
        console.log("Final result",final)
        setName(final.email)
        response.status === 200 && console.log("The user has been got")
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(async () => {
        {
            loggedInUser && await getUser()
        }
    },[loggedInUser])
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
            {
                // loggedInUser &&
                <h1>Welcome {name} to the app dear user!</h1>}

        </AnimatePresence>
    </main>
}

export default index