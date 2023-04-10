import {useActiveLeftBar} from "../../contexts";
import Register from "./Setting/Register";
import Delete from "./Setting/Delete"
import Edit from "./Setting/Edit";
import {memo} from "react";

const Admin = () => {
  const {isActive} = useActiveLeftBar()
  return (

        <div className={`formContainer ${isActive ? 'active' : ''}`} id='mainContainer'>
            <Register />
            <Edit />
            <Delete />
        </div>
  )
}

export default memo(Admin)