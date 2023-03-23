import AuthPopup from "@/Components/AuthPopup";
import {useSelector} from "react-redux";
import Portal from "@/Components/Portal";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const index = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const openModal = useSelector(state => state.modal.open)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hasAccount, setHasAccount] = useState(false)

    return <main>
      <h1 style={{textAlign: "center"}}>Countries received from rest api</h1>

        <AnimatePresence>
            {openModal && <Portal >
                <AuthPopup as={motion.div} />
            </Portal>}
        </AnimatePresence>
    </main>
}

export default index