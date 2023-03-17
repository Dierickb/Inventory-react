import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import {useActiveLeftBar} from "../../contexts/ActiveLeftBar";

const Nav = () => {
    const {isActive, activeLeftBar} = useActiveLeftBar()

    const activeNav = () => {
        activeLeftBar()
    }

    return (
        <>
            <LeftBar isActive={isActive} />
            <TopBar setActive={activeNav} isActive={isActive}/>
        </>
    );
}

export default Nav