import React, { useState } from "react"

function StartScriptButton() {
  const [clicked, setClicked] = useState(false)

  return (
    <button
      onClick={() => {
        console.log("ButtonClicked! ")
        setClicked(true)
      }}></button>
  )
}

export default StartScriptButton
