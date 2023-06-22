import {useActiveLeftBar} from "../../contexts";

import Detail from "../../Components/Detail";

const InternOperation = () => {
    const {isActive} = useActiveLeftBar()
    return (
        <div className={`formContainer ${isActive ? 'active' : ''}`} id='mainContainer'>
            <h1>
                Buenaaas
            </h1>
            <Detail />
        </div> 
    )
}

export default InternOperation