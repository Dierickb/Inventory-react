const CardHeader = ({isCardVisible, handleItemToSearch, title, handleToggleForm, info, textInput}) => {
    const setItemToSearch = (e) => {
        if(textInput) {
            if(e.key !== 'Enter') return
            handleItemToSearch(e.target.value)
            return;
        }
        handleItemToSearch(e.target.value)
    }

  return (
      <div className={!isCardVisible ? "cardHeader" : "cardHeader no-pointer" }
           onClick={!isCardVisible ? handleToggleForm : ()=>{}}>
          <div className={isCardVisible ? "numbers pointer" : "numbers pointer"}
               onClick={isCardVisible ? handleToggleForm : ()=>{}}>
              <h4>{title}</h4>
          </div>
          {textInput && <div onKeyDown={(e) => setItemToSearch(e)} className="menu">{info}</div>}
          {!textInput && <div onChange={(e) => setItemToSearch(e)} className="menu">{info}</div>}
      </div>
  )
}

export default CardHeader