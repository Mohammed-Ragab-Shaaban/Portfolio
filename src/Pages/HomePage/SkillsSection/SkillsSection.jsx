import SkillsHead from "./SkillsHead";
import './Skills.css'
import SkillsBody from "./SkillsBody";


export default function SkillsSection() {
  return (
    <div style={{backgroundColor:"black"}}>
      <div className="py-3" style={{backgroundColor:"rgba(135, 80, 247, .1)"}}>
          <div className="container">
              <SkillsHead />
              <SkillsBody />
          </div>
      </div>

    </div>
  )
}
