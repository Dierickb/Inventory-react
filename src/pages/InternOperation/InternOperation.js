import {useActiveLeftBar} from "../../contexts";

import Detail from "../../Components/Detail/Detail";

const InternOperation = () => {
    const {isActive} = useActiveLeftBar()

    return (
        <div className={`formContainer ${isActive ? 'active' : ''}`} id='mainContainer'>
            <Detail pd="0"/>
        </div>
    )
}

export default InternOperation