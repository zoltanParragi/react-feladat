import React, { useState } from 'react'


export default function MobileSidebar() {
    const icons = [['list-ul', 'Dashboard'], ['house-door-fill', 'Home'], ['cloud-fill', 'Download'], ['database-fill', 'Fizestés'], ['code-slash', 'Code Snipets'], ['people-fill', 'Members'], ['arrow-repeat', 'Reload'], ['plus-lg', 'More']]
    const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false)
    const handleMobileSidebar = () => {
        mobileSidebarVisible ? setMobileSidebarVisible(false) : setMobileSidebarVisible(true)
    }
    return (
        <div id="mobile-sidebar">
            <div onClick={() => handleMobileSidebar()}>
                {mobileSidebarVisible
                    ? <i className='bi bi-x' tabIndex="0"></i>
                    : <i className='bi bi-list' tabIndex="0"></i>}
            </div>
            {mobileSidebarVisible && <ul>
                {icons.map((e, i) => <li key={i}><i className={'bi bi-' + e[0]} tabIndex="0"><span>{e[1]}</span></i></li>)}
            </ul>}
        </div>
    )
}
