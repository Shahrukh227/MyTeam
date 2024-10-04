import React, { useState } from 'react'
import css from "../Style/Navbar.module.css"
import { Link } from 'react-router-dom'
import team from "../assets/logo.jpg"
import { RxCross1 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";


function Navbar() {

  const [visible , setVisible] = useState(false)

  const handleBar =()=>{
  setVisible(!visible)
  }
  
  return (
    <nav className={css.nav}>

      <img src={team} alt="" />

      <ul className={`${visible ? css.visi : ""}`}>
      <RxCross1 className={css.icons} onClick={handleBar}/>
        <li><Link to="/" className={css.link}>Home</Link></li>

        <li><Link to='/teammembers' className={css.link}>Team Members</Link></li>
      </ul>
      <FaBarsStaggered className={`${css.icons} ${css.anotherIcon}`} onClick={handleBar}/>
    </nav>
  )
}

export default Navbar
