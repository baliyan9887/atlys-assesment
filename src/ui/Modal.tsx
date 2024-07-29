import { X as CloseIcon } from "react-feather";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="gradient-border-content">
        <div className="flex justify-end">
          <button className="bg-background-dark rounded-full p-2 absolute right-3 top-3">
            <CloseIcon onClick={onClose} width={14} height={14} />
          </button>
        </div>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
