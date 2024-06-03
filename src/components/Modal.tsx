import React from "react";
import LoginForm from "./LoginForm";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          X
        </button>
        <div className="modal-content">
          <div className="flex-row">
            <h2 className="modal__header">SIGN IN</h2>
            <p className="modal__acc login-form__txt">
              Don't have an account? <a className="modal__acc-join" href="#">Join</a>
            </p>
          </div>
            <hr className="line"/>
            <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Modal;
