import AuthPopup from "@/Components/AuthPopup";
import {useSelector} from "react-redux";
import Portal from "@/Components/Portal";
import {AnimatePresence, motion} from "framer-motion";

const index = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const openModal = useSelector(state => state.modal.open)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const loggedInUser = useSelector(state => state.modal.isLoggedIn)

    return <main>
      <h1 style={{textAlign: "center"}}>Countries received from rest api</h1>

        <AnimatePresence>
            {openModal && <Portal >
                <AuthPopup as={motion.div} />
            </Portal>}
            {loggedInUser && <h1>Welcome to the app dear user!</h1>}

        </AnimatePresence>
    </main>
}

export default index