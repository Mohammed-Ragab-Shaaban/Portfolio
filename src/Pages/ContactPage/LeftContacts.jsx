import './ContactPage.css';


export default function LeftContacts() {
  return (
    <div className="rounded-3" style={{backgroundColor:"#0c0120",border:"1px solid rgba(255,255,255,.2)"}}>
        <div className="skillsHead p-5">
            <h1>Let’s work together!</h1>
            <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
        </div>

        <form>
            <div className="formInput d-flex">
                <input  type="text" placeholder="First Name"/>
                <input  type="text" placeholder="Last Name"/>
            </div>
            <div className="formInput d-flex">
                <input type="email" placeholder="Email Address"/>
                <input type="text" placeholder="Phone Number"/>
            </div>
            <div className="formInput">
                <textarea  placeholder="Please Write Your Request"></textarea>
                <button className='send'>Send</button>
            </div>
        </form>
    </div>
  )
}
