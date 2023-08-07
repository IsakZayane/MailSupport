import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"
import { useState } from "react"

import CustomModal from "~components/CustomModal/CustomModal"
import { type EmailDTO } from "~types/EmailModal"
import { waitForElm } from "~utils/htmlHelpers"
import { extractEmailAddress } from "~utils/stringParser"
// This content script is "always" running, on a certain page
const Modal = () => {
  const [emailSubject, setEmailSubject] = useState<string>(null)
  const [emailAddress, setEmailAddress] = useState<string>(null)

  waitForElm(".OZZZK").then((elm) => {
    setEmailAddress(elm.textContent)
  })

  waitForElm(".UAxMv").then((elm) => {
    setEmailSubject(elm.textContent)
  })

  const emailData: EmailDTO = {
    emailAddress: extractEmailAddress(emailAddress),
    emailSubject,
    openModal: true
  }
  console.log(emailAddress + " emailSubject")
  return emailAddress != null && <CustomModal {...emailData}></CustomModal>
}

export default Modal

export const config: PlasmoCSConfig = {
  matches: ["https://outlook.live.com/*"],
  run_at: "document_idle"
}
export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector("body")
