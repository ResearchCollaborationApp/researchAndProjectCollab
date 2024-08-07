import { useState } from "react"
import PostModal from "./modals"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
export default function ModalTrigger() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>
        < FontAwesomeIcon icon ={faTrash} className = "mx-auto text-red-500" /> Delete
      </button>
      
      <PostModal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          <FontAwesomeIcon icon = {faTrash} className="mx-auto text-red-500" />
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-danger w-full">Delete</button>
            <button
              className="btn btn-light w-full"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </PostModal>
    </>
  )
}