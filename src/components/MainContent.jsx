import React from 'react'
import img from '../assets/banner-bg.jpg'

export default function MainContent() {
    return (
        <main>
            <div className="card">
                <div className="card-content">
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nostrum inventore</p>
                    <button><span>Get started</span> <i className="bi bi-arrow-right-short"></i></button>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nostrum inventore</p>
                    <button><span>Get started</span> <i className="bi bi-arrow-right-short"></i></button>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nostrum inventore</p>
                    <button><span>Get started</span> <i className="bi bi-arrow-right-short"></i></button>
                </div>
            </div>
            <div className="banner">
                <div className='banner-content' style={{ backgroundImage: 'url(' + img + ')' }}>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nostrum inventore</p>
                    <button><span>Get started</span> <i className="bi bi-arrow-right-short"></i></button>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nostrum inventore</p>
                    <button><span>Get started</span> <i className="bi bi-arrow-right-short"></i></button>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nostrum inventore</p>
                    <button><span>Get started</span> <i className="bi bi-arrow-right-short"></i></button>
                </div>
            </div>
            <div className="banner">
                <div className='banner-content' style={{ backgroundImage: 'url(' + img + ')' }}>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nostrum inventore</p>
                    <button><span>Get started</span> <i className="bi bi-arrow-right-short"></i></button>
                </div>
            </div>
        </main>
    )
}

