import Skill from "./Skill"
import { skills } from "./utils/data"
import { getLevelEmoji } from "./utils/data"

const SkillSet = () => {
  return (
    <div className="skill-list">
      {skills.map((skillItem) => (
        <Skill
          key={skillItem.skill}
          skill={skillItem.skill}
          emoji={getLevelEmoji(skillItem.level)}
          color={skillItem.color}
        />
      ))}
      {/* <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" /> */}
    </div>
  )
}

export default SkillSet
