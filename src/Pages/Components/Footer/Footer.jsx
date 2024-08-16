import NavLeftSide from "../Nav/NavLeftSide";
import './Footer.css'
import FooterSocialMedia from "./FooterSocialMedia";

export default function Footer() {
  return (
    <div style={{backgroundColor:"black",color:"var(--white)"}}>
        <div className="container p-4">
            <div className="mb-3 logoFooter"><NavLeftSide alignCenter="auto" /> </div>
            <div className="mb-3"><FooterSocialMedia /></div>
            <div  style={{textAlign:"center",color:"var(--mouve)"}}> <p>© 2024 All rights reserved</p></div>
        </div>
    </div>
  )
}
