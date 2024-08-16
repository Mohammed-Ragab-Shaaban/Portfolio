import { height } from "@fortawesome/free-brands-svg-icons/fa42Group"

import NavLeftSide from "./NavLeftSide"
import NavMiddleSide from "./NavMiddleSide"
import ListIcon from "./ListIcon"
import './Nav.css'
import { useEffect, useRef, useState } from "react"

export default function Nav() {
  

  const hideAndShowNav = useRef();
  const [toggle , setToggle] = useState(false);
console.log(hideAndShowNav);


  return (
    <div style={{backgroundColor:"black"}}>
        <div className="container p-3 gap-3 text-white d-flex justify-content-between align-items-center align-content-center"
            >
          <div>
            <NavLeftSide />
          </div>

          <div className="d-block d-md-none" onClick={()=>{

               if (toggle == true) {
                 hideAndShowNav.current.classList.add("d-none");
                 hideAndShowNav.current.classList.remove("d-md-none");
                 hideAndShowNav.current.classList.remove("d-block");
                 setToggle(false);
               }else{
                 hideAndShowNav.current.classList.remove("d-none");
                 hideAndShowNav.current.classList.add("d-block");
                 hideAndShowNav.current.classList.add("d-md-none");
                 setToggle(true);
                 
               }
            }}>
            <ListIcon />
          </div>

          <div className="jjjj flex-grow-1 d-none d-md-block">
            <NavMiddleSide/>
          </div>
            
        </div>
        <div ref={hideAndShowNav} className="d-none d-md-none" style={{transition:"display 1s"}}>
            <NavMiddleSide/>
          </div>
    </div>
  )
}
