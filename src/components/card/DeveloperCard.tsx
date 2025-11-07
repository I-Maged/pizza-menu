import Avatar from "./Avatar"
import Intro from "./Intro"
import SkillSet from "./SkillSet"

import "./styles.css"

const DeveloperCard = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillSet />
      </div>
    </div>
  )
}

export default DeveloperCard
