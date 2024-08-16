import { faGithub, faLinkedin, faSquareFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterSocialMedia() {
  return (
    <div className="socialMediaIcon d-flex gap-4 justify-content-center" style={{fontSize:"1rem"}}>
        <div><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></div>
        <div><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></div>
        <div><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></div>
        <div><FontAwesomeIcon icon={faSquareFacebook}></FontAwesomeIcon></div>
    </div>
  )
}



