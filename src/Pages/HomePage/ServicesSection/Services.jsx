import ServicesBody from "./ServicesBody";
import ServicesHead from "./ServicesHead";



export default function Services() {
  return (
    <div style={{backgroundColor:"black"}}>
        <div className="container pb-5">
            <ServicesHead />
            <ServicesBody />
        </div>
    </div>
  )
}
