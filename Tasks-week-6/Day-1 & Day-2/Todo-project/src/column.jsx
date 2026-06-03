import { useRef, useState } from "react";
import Card from "./components/card";
import { v4 as uuidv4 } from "uuid";
import './App.css'

export default function Column({ title, name, cards, addCard, deleteCard, moveCard, reorder, editCard, toggleDone, deleteColumn }) {

    const inputRef = useRef(null);
    const [showEmptyModal, setShowEmptyModal] = useState(false);

    function handleAdd() {
        const text = inputRef.current.value.trim();

        // Ensuring that the input box should not be empty
        if (!text) {
            console.log('Input field is empty');
            setShowEmptyModal(true);
            return;
        }

        // Adding the card
        addCard(name, text, uuidv4());
        inputRef.current.value = "";
    }
    return (<div className="todo-app">


        <div className="column-header">
            <h2>{title}</h2>

            {name !== "todo" &&
                name !== "doing" &&
                name !== "done" && (

                    <button
                        className="delete-column"
                        onClick={() => deleteColumn(name)}
                    >
                        X
                    </button>
                )}
        </div>

        <div className="row">
            <input ref={inputRef} placeholder="Add card..." />
            <button onClick={handleAdd}>
                Add
            </button>
        </div>

        {cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} column={name} deleteCard={deleteCard}
                moveCard={moveCard} reorder={reorder} editCard={editCard} toggleDone={toggleDone} />
        ))}

        {showEmptyModal && (
            <div className="modal">
                <div className="modal-box">

                    <p>Please write something before adding a card!</p>

                    <button onClick={() => setShowEmptyModal(false)}>
                        OK
                    </button>

                </div>
            </div>
        )}
    </div>

    );
}