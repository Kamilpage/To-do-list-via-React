import { useState } from "react";

function ColorButton({ status }) {
    const [clicked, setClicked] = useState(status === "complete");

    const handleClick = () => {
        if (clicked) return; // Если задача уже завершена, не меняем статус
        setClicked((prev) => !prev);
    };

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: clicked ? "green" : "grey",
                color: "white",
                cursor: clicked ? "not-allowed" : "pointer",
            }}
            disabled={clicked}
        >
            {clicked ? "Completed" : "In Progress"}
        </button>
    );
}

export default ColorButton;
