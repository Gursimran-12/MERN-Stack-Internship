import { memo, useState } from "react";

function Card({ card, index, column, deleteCard, moveCard, reorder, editCard, toggleDone }) {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(card.text);
return (
  <>
    <div className="card">

      <p style={{
        textDecoration: card.done ? "line-through" : "none"
      }}>
        {card.text}
      </p>

      <div className="card-actions">

        <span onClick={() => reorder(column, index, "up")}>
          up
        </span>

        <span onClick={() => reorder(column, index, "down")}>
          down
        </span>

        {column !== "todo" && (
          <span onClick={() =>
            moveCard(column, "todo", card.id)
          }>
            left
          </span>
        )}

        {column !== "done" && (
          <span onClick={() =>
            moveCard(
              column,
              column === "todo" ? "doing" : "done",
              card.id
            )
          }>
            right
          </span>
        )}

        <span onClick={() => toggleDone(column, card.id)}>
          Done
        </span>


        <span onClick={() => setEditing(true)}>
          Edit
        </span>

        <span onClick={() =>
          deleteCard(column, card.id)
        }>
          Delete
        </span>

      </div>
    </div>

   
    {editing && (
      <div className="modal">
        <div className="modal-box">

          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />

          <button
            onClick={() => {
              editCard(column, card.id, newText);
              setEditing(false);
            }}
          >
            Save
          </button>

          <button onClick={() => setEditing(false)}>
            Cancel
          </button>

        </div>
      </div>
    )}

  </>
);

}

export default memo(Card);
