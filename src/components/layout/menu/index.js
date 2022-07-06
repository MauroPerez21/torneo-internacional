import React from 'react'
import {Link } from 'react-router-dom'
import { RiHomeHeartLine } from "react-icons/ri";
//import { RiImageFill } from "react-icons/ri";
import { RiMapPin2Fill } from "react-icons/ri";
import { MdEvent } from "react-icons/md";
import { MdCameraEnhance } from "react-icons/md";
import './aside.css'
export default function NavAside(){
React.useLayoutEffect(()=>{
  let list = document.querySelectorAll('li')
  for(let i = 0; i< list.length; i++)
  {
    list[i].onmouseover = function(){
    let j = 0;
      while(j < list.length)
      {
        list[j++].className = 'list'
      }
    list[i].className = 'list active'
  }
  }
  return;
  
});
    return ( 
    
    <div className="sidenav">
      <ul>
        <li className="list active">
          <Link to="/inicio" href="#">
            <span className="icon"><RiHomeHeartLine/></span>
            <span className="title">inicio</span>
          </Link>
        </li>
        <li className="list">
          <Link to="/eventos" href="#">
            <span className="icon"><MdEvent/></span>
            <span className="title">eventos</span>
          </Link>
        </li>
        <li className="list">
          <Link to="/lugares">
            <span className="icon"><RiMapPin2Fill/></span>
            <span className="title">guia</span>
          </Link>
        </li>
        <li className="list">
          <Link to="/galeria">
            <span className="icon"><MdCameraEnhance/></span>
            <span className="title">galeria</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
     );
}
 
