import React from "react"
import "./Token.css"
import { scaleOrdinal } from "d3-scale"
import { schemePaired } from "d3-scale-chromatic"
import { Token } from "../../types"
import { ReactElement } from "react"

const tags = ["JJ", "NN", "VB", "W", "DT", "IN", "POS", "RB", "CD", "CC"]
const scale = scaleOrdinal(schemePaired).domain(tags)
const fallbackColor = "#ddd"

interface Props {
  readonly token: Token
}

function color(tag: string): string {
  const category = tags.find((prefix) => tag.startsWith(prefix))
  return category ? scale(category) : fallbackColor
}

export default function TokenComponent({ token }: Props): ReactElement {
  const { tag } = token
  return (
    <div className="Token" title={token.lemma}>
      <div>{token.word}</div>
      <div style={{ color: color(tag) }}>{tag}</div>
    </div>
  )
}
