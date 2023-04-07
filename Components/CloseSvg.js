import {blob, me} from "../styles/Close.module.css"
import {useDispatch} from "react-redux";
import {toggle} from "@/store/features/modal";
import {useRouter} from "next/navigation";
const CloseSvg = () => {
    const router = useRouter()

    const dispatch = useDispatch()
    return <div className={blob} onClick={()=> {
        console.log(`Page refreshing`)
        router.refresh()
        dispatch(toggle())
    }}>
        <svg className={me} fill="#000000" height="800px" width="800px"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 512 512">
            <g>
                <g>
                    <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512
                        512,452.922 315.076,256 		"/>
                </g>
            </g>
        </svg>
    </div>

}

export default CloseSvg