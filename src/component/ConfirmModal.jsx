import './Modal.css'

export default function ConfirmModal({ isOpen, onSubmit, onClose }) {
    const closeModal = () => onClose();
    const handleConfirm = () => {
        onSubmit();
    };

    return (
        <div>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <h2>Вы уверены?</h2>
                        <p>Это действие необратимо.</p>
                        <button onClick={handleConfirm}>Да, удалить</button>
                        <button onClick={closeModal}>Отмена</button>
                    </div>
                </div>
            )}
        </div>
    );
}
