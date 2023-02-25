import React from "react"
import "../css/main.css"

import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const [isOpen,setIsOpen] = React.useState(false)
  const toggleSidebar=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
   
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      {children}

    </>
  )
}

export default Layout
