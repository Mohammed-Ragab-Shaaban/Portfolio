import { Link } from "react-router-dom";
import './NavMiddleSide.css'

export default function NavMiddleSide() {
  return (
    <div>
        <ul className="d-flex flex-column flex-md-row gap-5 justify-content-end align-items-baseline">
            <li className="align-self-center" ><Link className="ancor" to={"/"}>Home</Link>
            <span></span>
            </li>
            {/* <li className="align-self-center"><Link className="ancor" to={"/about"}>About</Link>
            <span></span>
            </li> */}
            <li className="align-self-center"><Link className="ancor" to={"/contact"}>Contact Me</Link>
            <span></span>
            </li>
            <li className="align-self-center"><button id="hireMe">Hire Me</button></li>
        </ul>
    </div>
  )
}
