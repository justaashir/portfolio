import React from "react"
import { RoughNotation } from "react-rough-notation"

export const CircleHighlight = ({
  color,
  children,
}: {
  color: string
  children: string
}) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length)

  return (
    <RoughNotation
      type="underline"
      multiline={true}
    >
      {children}
    </RoughNotation>
  )
}
