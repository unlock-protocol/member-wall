import React from "react"
import MersenneTwister from "mersenne-twister"
import Color from "color"

function hueShift(generator, colors) {
  var wobble = 30
  var amount = generator.random() * 30 - wobble / 2
  return colors.map(function(hex) {
    var color = Color(hex)
    color.rotate(amount)
    return color.hexString()
  })
}

function genColor(generator, colors) {
  var rand = generator.random()
  var idx = Math.floor(colors.length * generator.random())
  var color = colors.splice(idx, 1)[0]
  return color
}

function genShape(generator, remainingColors, center, radius, i, total, svg) {
  var center

  var firstRot = generator.random()
  var angle = Math.PI * 2 * firstRot
  var velocity =
    ((radius * 2) / total) * generator.random() + (i * radius * 2) / total

  var tx = Math.cos(angle) * velocity
  var ty = Math.sin(angle) * velocity

  var translate = "translate(" + tx + " " + ty + ")"

  // Third random is a shape rotation on top of all of that.
  var secondRot = generator.random()
  var rot = firstRot * 360 + secondRot * 180
  var rotate = "rotate(" + rot.toFixed(1) + " " + center + " " + center + ")"
  var transform = translate + " " + rotate
  var fill = genColor(generator, remainingColors)
  return (
    <rect
      x="0"
      y="0"
      width={radius * 2}
      height={radius * 2}
      transform={transform}
      fill={fill}
    ></rect>
  )
}

/**
 * Taken from MetaMask
 * @param {*} address
 */
function jsNumberForAddress(address) {
  var addr = address.slice(2, 10)
  var seed = parseInt(addr, 16)
  return seed
}

/**
 * Renders a member
 * @param {*} param0
 */
export const Member = ({ member, width }) => {
  /**
    {
     expiration: '1580440822',
      keyId: '189',
      owner: '0xa928703202ebb3fe9c4bae53e95e6084d7b8c042',
      lockAddress: '0xb0ad425ca5792dd4c4af9177c636e5b0e6c317bf',
      lockName: 'ETHWaterloo'
    }
   */

  const colors = [
    "#01888C", // teal
    "#FC7500", // bright orange
    "#034F5D", // dark teal
    "#F73F01", // orangered
    "#FC1960", // magenta
    "#C7144C", // raspberry
    "#F3C100", // goldenrod
    "#1598F2", // lightning blue
    "#2465E1", // sail blue
    "#F19E02" // gold
  ]

  const generator = new MersenneTwister(jsNumberForAddress(member.owner))
  const remainingColors = hueShift(generator, colors.slice())
  const backgroundColor = genColor(generator, remainingColors)
  const shapeCount = 4

  const shapes = []

  const radius = width / 2
  const center = width / 2
  for (var i = 0; i < shapeCount - 1; i++) {
    shapes.push(
      genShape(generator, remainingColors, center, radius, i, shapeCount - 1)
    )
  }

  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" width={width} height={width}>
      <clipPath id="clipCircle">
        <circle cx={center} cy={center} r={radius} />
      </clipPath>
      <circle cx={center} cy={center} r={radius} fill={backgroundColor} />
      <g clipPath="url(#clipCircle)">{shapes}</g>
    </svg>
  )
}

export default Member
