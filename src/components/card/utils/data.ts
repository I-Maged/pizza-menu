type skillArrayProps = {
  skill: string
  level: string
  color: string
}
export const skills: skillArrayProps[] = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
]
export const getLevelEmoji = (level: string): string => {
  switch (level) {
    case "beginner":
      return "👶"
    case "intermediate":
      return "👍"
    case "advanced":
      return "💪"
    default:
      return ""
  }
}
