import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RightContact() {



  return (
    <div className="ddddd p-md-3 d-flex flex-column gap-4 mt-4 mt-md-0">

      <div className="d-flex gap-4">
        <div className="contactIcon" ><FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon> </div>
        <div>
          <p className="m-0">Phone</p>
          <h4>011 478 51 251</h4>
        </div>
      </div>

      <div className="d-flex gap-4">
        <div className="contactIcon" ><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> </div>
        <div>
          <p className="m-0">Phone</p>
          <h4>011 478 51 251</h4>
        </div>
      </div>

      <div className="d-flex gap-4">
        <div className="contactIcon" ><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> </div>
        <div>
          <p className="m-0">Phone</p>
          <h4>011 478 51 251</h4>
        </div>
      </div>

    </div>
  )
}
