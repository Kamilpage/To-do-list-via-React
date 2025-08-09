import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import ColorButton from "./colorBtn";

function ToDoList({ items, onEdit, onDelete }) {
    const [isOpen, setModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const handleEdit = (item) => onEdit(item);

    const handleDeleteClick = (index) => {
        setDeleteId(index);
        setModalOpen(true);
    };

    const handleClose = () => setModalOpen(false);

    const deleteTodo = () => {
        onDelete(deleteId);
        setDeleteId(null);
        setModalOpen(false);
    };

    return (
        <div className="todo-list">
            {items.map((item, index) => (
                <div key={item.id ?? index} className="todo-item">
                    <h2 className="todo-title">{item.title}</h2>

                    <p className="todo-text">{item.body}</p>

                    <p className="todo-date">
                        {item.endDate}
                    </p>

                    <div className="todo-actions">
                        <div className="todo-status">
                            <ColorButton />
                        </div>

                        <button
                            className="btn btn-edit"
                            onClick={() => handleEdit(item)}
                            type="button"
                        >
                            Edit
                        </button>

                        <button
                            className="btn btn-delete"
                            onClick={() => handleDeleteClick(index)}
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}

            <ConfirmModal
                isOpen={isOpen}
                setValue={setModalOpen}
                onSubmit={deleteTodo}
                onClose={handleClose}
            />
        </div>
    );
}

export default ToDoList;
