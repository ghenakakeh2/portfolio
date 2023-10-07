import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'




const Nav = () => {
  const [active,setactive]=useState('#')
  return (
    
 

    <nav>
       <a href='#' onClick={()=>setactive("#") }className={active==='#' ?'active':''}> {<AiOutlineHome />}</a>
      <a  href='#about' onClick={()=>setactive("#about")} className={active==='#about' ?'active':''}> {<BiUser />}</a>
      <a  href='#experience' onClick={()=>setactive("#experince")} className={active==='#experince' ?'active':''}> {<BsBook />}</a>
      <a  href='#servces' onClick={()=>setactive("#servces")} className={active==='#servces' ?'active':''}> {<RiServiceLine />}</a>
      <a  href='#contact' onClick={()=>setactive("#contact")} className={active==='#contact' ?'active':''}> {<BiMessageDetail />}</a> 

    </nav>

    
  
  


  )
}

export default Nav
