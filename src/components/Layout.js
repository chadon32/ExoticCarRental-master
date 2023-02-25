import React from "react"
import "../css/main.css"
import SocialFollow from "../components/SocialFollow";
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
      <SocialFollow />
    </>
  )
}

export default Layout
