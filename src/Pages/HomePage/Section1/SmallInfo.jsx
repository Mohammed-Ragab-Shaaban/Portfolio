import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SmallInfo() {
  return (
    <div className="smallInfo pt-md-5">
        <h3>Mohammed Ragab</h3>
        <h1>Front-End Developer</h1>
        <p>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
        <button className="downloadCV">Download CV <span style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></span></button>
    </div>
  )
}
