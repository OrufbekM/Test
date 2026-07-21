import { MorphText } from "@/components/ui/morph-text"

export function CustomMorph() {
  return (
    <MorphText
      words={["I", "HATE", "NIGGERS"]}
      interval={2500}
      subtext="Holly Racism"
      // className=""
      fontSize="clamp(2rem, 10vw, 8rem)"
    />
  )
}