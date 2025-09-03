interface ModalProps {
    rating: number;
    onClose: () => void;
    isOpen: boolean;
}

const Modal = ({ rating,isOpen, onClose }: ModalProps) => {
    if(!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <h2>Thank you</h2>
                <p>You rated us {rating} star{rating > 1 ? 's' : ''}</p>
                <button className='close-btn' onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal;