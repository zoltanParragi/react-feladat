import React from 'react'

export default function Sidebar() {
    const icons = ['list-ul', 'house-door-fill', 'cloud-fill', 'database-fill', 'code-slash', 'people-fill', 'arrow-repeat', 'plus-lg']
    return (
        <div id="sidebar">
            {icons.map((e, i) => <i key={i} className={'bi bi-' + e} tabIndex="0"></i>)}
        </div>
    )
}
