import { useState } from "react";

function ColorButton() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prev) => !prev);
    };

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: clicked ? "green" : "grey",
                color: "white",
                cursor: "pointer",
            }}
        >
            {clicked ? "Completed" : "In Progress"}
        </button>
    );
}

export default ColorButton;
