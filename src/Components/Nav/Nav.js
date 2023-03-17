import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import {memo} from 'react';
import {useActiveLeftBar} from "../../contexts/ActiveLeftBar";

const Nav = () => {
    const {active, activeLeftBar} = useActiveLeftBar()

    const activeNav = () => {
        activeLeftBar()
    }

    return (
        <>
            <LeftBar active={active} />
            <TopBar setActive={activeNav} active={active}/>
        </>
    );
}

export default memo(Nav)