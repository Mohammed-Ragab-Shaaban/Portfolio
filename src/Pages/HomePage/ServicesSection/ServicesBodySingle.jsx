import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Services.css'
import { useState } from "react";
import { faHandPointLeft } from "@fortawesome/free-regular-svg-icons";

export default function ServicesBodySingle(props) {

    const [iconState,setIconState] = useState(false);
    const stly = {
        animationName: "handIconMove",
        animationDuration : ".5s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        animationDirection: "alternate",
    }
  return (
    <div className="service row text-white  align-items-center py-4" 
          onMouseOver={()=>{
          setIconState(true);
        // console.log(`over` + iconState)
        }} 
        onMouseOut={()=>{
            setIconState(false);
            // console.log(`out` + iconState)
        }}  >
        <div className="d-flex col-12 col-md-4 gap-2 align-items-center">
            <span>{props.number}</span>
            <h2>{props.name}</h2>
        </div>
        <div className="d-flex col-12 col-md-8 align-items-center">
            <p> I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people  </p>
            <span><FontAwesomeIcon className="handIcon" style={iconState ? stly:null} icon={iconState ? faHandPointLeft : faArrowTrendUp}></FontAwesomeIcon></span>
        </div>
    </div>
  )
}
