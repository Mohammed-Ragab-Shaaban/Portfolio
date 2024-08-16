import { useState } from "react";
import mailImage from "../../../assets/Images/1.jpg";
import MyImage from "./MyImage";
import './Section1.css';
import SmallInfo from "./SmallInfo";
import { useRef } from "react";

export default function Section1() {

// const [wid,setWid] = useState();
// window.addEventListener("resize",(e)={
// })
// setWid(e);
// window.screen.width.onchange((e)=>{
//     console.log(e)
// })

// const windowSize = useRef([
//     window.innerWidth
//   ]);
// console.log(windowSize)

// const handelWidth = (e)=>{
// window.innerWidth
// console.log(e);
// }
// window.onresize((e)=>{
// console.log(e);
// })

window.addEventListener("resize", myFunction);
const [wid , setWid] = useState(screen.availWidth);

function myFunction(){
    screen.availWidth > 768 ? setWid(768) : setWid(766);
}
console.log(wid);

  return (
    <div id="mainImage"  style={ wid >= 768 ? {height:"80vh"} : {height:"145vh"} }>
        <div className="container pt-5">
            <div className="row">
                    <div className="col-md-6 col-12">
                        <SmallInfo />
                    </div> 
                    <div className="col-md-6 col-12" >
                        <MyImage />
                    </div>
            </div>
        </div>
    </div>
  )
}
