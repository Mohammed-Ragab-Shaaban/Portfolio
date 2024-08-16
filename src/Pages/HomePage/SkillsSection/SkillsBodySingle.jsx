// import wp from '../../../assets/Images/wp.svg'

export default function SkillsBodySingle(props) {
  return (
    <div className="skillsBodySingle">
        <div className="pic">
            <img src={props.pic} alt="skills" />
            <p>{props.percentage}</p>
        </div>
        <p>{props.skillName}</p>
    </div>
  )
}
