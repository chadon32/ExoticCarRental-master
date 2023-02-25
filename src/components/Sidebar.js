import React from "react"

import { FaTimes } from "react-icons/fa"
const Sidebar = ({isOpen,toggleSidebar}) => {

  return <aside className={`sidebar ${isOpen ? "show-sidebar": ""}`}>
    <button className="close-btn" onClick={toggleSidebar}>
      <FaTimes/>
    </button>
    <div className="side-container">

    </div>
  </aside>
}

export default Sidebar
