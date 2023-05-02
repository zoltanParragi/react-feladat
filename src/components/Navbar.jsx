import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from './themeSlice'


export default function Navbar() {
    const dispatch = useDispatch()

    return (
        <nav>
            <div id="brand" tabIndex="0">Carbon Cloud Dashboard</div>
            <div id="search">
                <input type="text" aria-label="keresés" />
                <i className="bi bi-search" tabIndex="0"></i>
            </div>
            <div>
                <i className="bi bi-pencil-fill" tabIndex="0"></i>
                <i className="bi bi-bell-fill" tabIndex="0"></i>
                <i className="bi bi-person-fill" tabIndex="0"></i>
                <i className="bi bi-universal-access-circle" onClick={() => dispatch(toggle())} tabIndex="0"></i>
            </div>
        </nav>
    )
}
