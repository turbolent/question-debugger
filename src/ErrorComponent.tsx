import * as React from "react"
import "./ErrorComponent.css"
import { connect } from "react-redux"
import { State } from "./state"

interface StateProps {
  readonly message: string
}

function ErrorComponent({ message }: StateProps) {
  return <div className="Error">{message}</div>
}

const mapStateToProps = (s: State): StateProps => ({
  message: s.error || "",
})

export default connect(mapStateToProps)(ErrorComponent)
