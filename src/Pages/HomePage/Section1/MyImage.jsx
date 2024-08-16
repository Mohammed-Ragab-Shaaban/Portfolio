import './Section1.css';
import mailImage from "../../../assets/Images/myImage.jpg";
import { useState } from 'react';

export default function MyImage() {

    const stl1 ={
        maxWidth: "300px",
        height: "400px",
        margin:"auto"
    }
    const stl2 ={
        maxWidth: "250px",
        height: "350px",
        margin:"20px auto"
    }

    window.addEventListener("resize", myFunction);
    const [wid , setWid] = useState(screen.availWidth);
    
    function myFunction(){
        screen.availWidth > 768 ? setWid(768) : setWid(766);
    }

  return (
    <div className="myImage" style={wid >= 768 ? stl1 : stl2 }>
    </div>
  )
}
