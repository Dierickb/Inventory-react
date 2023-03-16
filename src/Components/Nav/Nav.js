import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import {memo, useState} from 'react'

const Nav = () => {
    const [active, setActive] = useState(false)

    const activeNav = () => {
      const mainContainer = document.querySelector('#mainContainer')
      mainContainer.removeAttribute('class')
      mainContainer.setAttribute('class', `formContainer ${!active ? 'active' : ''}`)
      setActive(!active)
    }

    return (
        <>
          <LeftBar active={active} />
          <div className={`topBar ${active ? 'active' : ''}`}>
              <TopBar setActive={activeNav} active={active}/>
          </div>
        </>
    );
}

export default memo(Nav)