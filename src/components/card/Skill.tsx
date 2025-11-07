import type { FC } from "react"

type SkillProps = {
  skill: string
  emoji: string
  color: string
}

const Skill: FC<SkillProps> = ({ skill, emoji, color }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  )
}

export default Skill
