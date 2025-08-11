import { useState, useEffect } from "react";
import TodoForm from "./component/ToDoComponent";
import ToDoList from "./component/ToDoList";
import "./App.css";

function App() {
    const [items, setItems] = useState([]);
    const [initialData, setInitialData] = useState(null);
    const [highlightedField, setHighlightedField] = useState(null);

    useEffect(() => {
        const savedItems = localStorage.getItem("todos");
        if (savedItems) {
            setItems(JSON.parse(savedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(items));
    }, [items]);

    const handleAddOrEditItem = (item) => {
        if (!item) {
            setInitialData(null);
            return;
        }

        if (!item.title || !item.body || !item.endDate) {
            setHighlightedField(item.title ? (item.body ? "endDate" : "body") : "title");
            return;
        }

        if (items.some(i => i.title === item.title)) {
            alert("Задача с таким названием уже существует!");
            return;
        }

        if (item.id) {
            setItems(prev => prev.map(it => it.id === item.id ? { ...it, ...item } : it));
        } else {
            const newItem = { ...item, id: Date.now() };
            setItems([...items, newItem]);
        }

        setInitialData(null);
        setHighlightedField(null);
    };

    const deleteItem = (idx) => {
        const nItems = [...items];
        nItems.splice(idx, 1);
        setItems(nItems);
    };

    return (
        <div className="app-container">
            <TodoForm
                item={initialData}
                onSubmit={handleAddOrEditItem}
                highlightedField={highlightedField}
            />
            <ToDoList
                items={items}
                onEdit={setInitialData}
                onDelete={deleteItem}
            />
        </div>
    );
}

export default App;
