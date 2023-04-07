import {useRouter} from "next/router";
import {useRef, useState} from "react";

const usePush = ()=> {
    const router = useRouter()
    const routerRef = useRef(router)

    routerRef.current = router

    const [{ push }] = useState({
        push: path => routerRef.current.push(path),
    })

    return push
}
export default usePush