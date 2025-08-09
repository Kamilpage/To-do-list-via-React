import { useState, useEffect } from "react";
import React from "react";

function TodoForm({ onSubmit, item }) {
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
        onSubmit(null); // сбросим форму и передадим null
    };

    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Name of a task" />
                <input
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Description" />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)} />

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
