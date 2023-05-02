import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import MobileSidebar from './components/MobileSidebar'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector((state) => state.theme.value)

  return (
    <div id="app-container">
      <style type="text/css">
        {theme === 'dark' && `
           :focus {
            border: 2px solid yellow;
          }

          body {
            background-color: black;
            color: yellow;
          }
          
          nav {
            background: rgb(39, 39, 39);
            color: yellow;
          }

          nav input {
            color: yellow;
            background: black;
            outline: none;
            border: none;
          }
          
          nav>#search>i {
            border: none;
          }
          
          /* sidebar */
          
          /* mobile sidebar */
          #mobile-sidebar {
            color: yellow;
            background: rgb(39, 39, 39);
            font-size: 120%;
          }
          
          #mobile-sidebar>ul {
            background: black;
          }
          
          #mobile-sidebar>ul>li:hover {
            background: inherit;
          }
          
          #mobile-sidebar>ul>li:not(:first-child) {
            border-top: 1px solid rgb(24, 24, 24);
          }
          
          /* main content */
          main {
            font-size: 120%;
          }
          main button {
            background-color: black;
          }

          main>.card>.card-content {
            background: rgb(41, 41, 41);
          }
          
          main>.card>.card-content>button {
            color: yellow;
            border: 1px solid yellow;
          }
          
          main>.banner>.banner-content {
            color: yellow;
          }
          
          main>.banner>.banner-content>button{
            color: yellow;
            background: black;
            border: 1px solid yellow;
          }
         
          `
        }
      </style>
      <MobileSidebar />
      <Navbar />
      <Sidebar />
      <MainContent />

    </div>
  )
}

export default App
