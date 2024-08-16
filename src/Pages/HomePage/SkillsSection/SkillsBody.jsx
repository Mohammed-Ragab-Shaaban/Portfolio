import SkillsBodySingle from "./SkillsBodySingle";
import wp from '../../../assets/Images/wp.svg'
import figma from '../../../assets/Images/figma.svg'
import react from '../../../assets/Images/react.svg'
import js from '../../../assets/Images/js.svg'
import ph from '../../../assets/Images/ph.svg'
import Al from '../../../assets/Images/Al.svg'

export default function SkillsBody() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
        <SkillsBodySingle pic={figma} skillName="Figma" percentage="85%" />
        <SkillsBodySingle pic={react} skillName="React" percentage="90%" />
        <SkillsBodySingle pic={wp} skillName="WordPess" percentage="89%" />
        <SkillsBodySingle pic={js} skillName="JavaScript" percentage="75%" />
        <SkillsBodySingle pic={ph} skillName="PhotoShop" percentage="95%" />
        <SkillsBodySingle pic={Al} skillName="illustrator" percentage="75%" />
    </div>
  )
}
