import { useState, useEffect } from "react";

function TodoForm({ onSubmit, item, highlightedField }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        if (item) {
            setTitle(item.title);
            setBody(item.body);
            setEndDate(item.endDate);
        }
    }, [item]);

    const clearForm = () => {
        setTitle('');
        setBody('');
        setEndDate('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title || !body || !endDate) return;

        onSubmit({
            title,
            body,
            endDate,
            status: item?.status || 'in_progress'
        });

        clearForm();
    };

    const handleCancel = () => {
        clearForm();
        onSubmit(null);
    };

    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Name of a task"
                    className={highlightedField === "title" ? "highlighted" : ""}
                />
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Description"
                    className={highlightedField === "body" ? "highlighted" : ""}
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className={highlightedField === "endDate" ? "highlighted" : ""}
                />

                {item ? (
                    <>
                        <button type="submit">Сохранить</button>
                        <button type="button" onClick={handleCancel}>Отменить</button>
                    </>
                ) : (
                    <button type="submit">Добавить</button>
                )}
            </form>
        </>
    );
}

export default TodoForm;
