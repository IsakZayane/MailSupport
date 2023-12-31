import React from "react"

function IndexPopup() {
  return (
    <div>
      <h2>Actions</h2>
      <button id="sign-in">Sign In</button>
      <button id="sign-in-hint" className="hidden"></button>
      <button id="sign-out">Sign Out</button>
      <button id="call-graph">Call Graph</button>

      <h2>Signed In User</h2>
      <dl>
        <dt>Username:</dt>
        <dd id="username"></dd>

        <dt>Display name:</dt>
        <dd id="displayname"></dd>
      </dl>
    </div>
  )
}

export default IndexPopup
