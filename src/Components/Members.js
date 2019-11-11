import React from "react"
import Member from "./Member"

/**
 * Renders the SVG based
 */
export const Members = ({ members, maxWidth, maxHeight, urlTemplate }) => {
  const totalMembers = members.length
  const totalSurface = maxWidth * maxHeight

  // It needs to be at most the squareroot
  let maxMemberSide = Math.sqrt(totalSurface / totalMembers)
  // maxMemberSide needs to be the largest divider of maxWidth that's small than memberSide
  const byRow = Math.ceil(maxWidth / maxMemberSide)
  const totalWidth = maxMemberSide * byRow
  maxMemberSide = maxMemberSide - (totalWidth - maxWidth) / byRow

  const numberOfRows = Math.ceil(totalMembers / byRow)
  const totalHeight = maxMemberSide * numberOfRows

  if (totalHeight > maxHeight) {
    maxMemberSide = maxMemberSide - (totalHeight - maxHeight) / numberOfRows
  }

  const memberSide = maxMemberSide

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={maxHeight} width={maxWidth}>
      {members.map((member, index) => {
        const x = index % byRow
        const y = Math.floor(index / byRow)
        const href = `https://etherscan.io/address/${member.owner}`
        return (
          <a key={member.owner} href={href}>
            <svg x={x * memberSide} y={y * memberSide}>
              <Member width={memberSide / 2} member={member} />
            </svg>
          </a>
        )
      })}
    </svg>
  )
}

export default Members
