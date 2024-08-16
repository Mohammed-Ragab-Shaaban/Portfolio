import LeftContacts from "./LeftContacts";
import RightContact from "./RightContact";

export default function ContactPage() {
  return (
    <div style={{backgroundColor:"#222"}}>
        <div className="container py-5">

            <div className="d-flex flex-column flex-md-row text-white justify-content-between gap-2">
              <div className="col-12 col-md-7">  <LeftContacts />  </div>  
              <div className="col-12 col-md-5 align-content-center">  <RightContact />   </div>  
            </div>

        </div>
    </div>
  )
}
