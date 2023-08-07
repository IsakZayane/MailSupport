import { useState, useEffect } from "react"
import Modal from "react-modal"

import type { EmailDTO } from "~types/EmailModal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
}

export default function CustomModal({
  openModal,
  emailAddress,
  emailSubject
}: EmailDTO) {
  // var subtitle
  const [isModalOpen, setIsModalOpen] = useState(openModal)
  console.log("isModalOpen", isModalOpen)
  const closeModal = () => {
    console.log("Closing modal")
    setIsModalOpen(false)
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00"
  }

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        onAfterOpen={afterOpenModal}
        contentLabel="Example Modal">
        <h2>Detta mail kommer ifrån: </h2>
        <div>Email adressen: {emailAddress}</div>
        <div>Ämnet är: {emailSubject}</div>
        <div>Känns det rimligt?</div>
        <button onClick={closeModal} className="bajskorv" >close</button>
        <button onClick={() => {}}>Send Email</button>
      </Modal>
    </div>
  )
}
