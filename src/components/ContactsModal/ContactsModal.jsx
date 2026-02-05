import './ContactsModal.css'
import { FaTimes, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

function ContactsModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <h2>Контакти</h2>

        <p>
          <FaPhoneAlt /> +380 XX XXX XX XX
        </p>

        <p>
          <FaEnvelope /> bakeryshop@email.com
        </p>
      </div>
    </div>
  )
}

export default ContactsModal