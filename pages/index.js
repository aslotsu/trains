import AuthPopup from "@/Components/AuthPopup";
import {useSelector} from "react-redux";
import Portal from "@/Components/Portal";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

const index = () => {

    const getUser = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let response = await fetch('https://go-jwt-auth-production.up.railway.app/users/get-user',
            {
                headers: myHeaders,
                credentials: 'include'
            })
        const final = await response.json()
        console.log(final)
        setName(final.email)
        response.status === 200 && console.log("The user has been got")
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=> {
        getUser().then(r => console.log(r)).catch(e => console.log(e))
    },[])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState(null)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const openModal = useSelector(state => state.modal.open)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const loggedInUser = useSelector(state => state.modal.isLoggedIn)

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