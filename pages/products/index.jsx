import { useState } from "react"
import Modal from "../../components/modal/Modal"

export default function Products() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      Продукты
      <button style={{ background: "blue" }} onClick={() => setOpenModal(!openModal)}>open modal</button>
      <Modal open={openModal} onCloseModal={() => setOpenModal(!openModal)} />
    </div>
  )
  }