import { useState, useEffect, useRef } from "react";
import Column from "./column.jsx";

export default function App() {

  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");
  const addInputRef = useRef(null);

  const [columns, setColumns] = useState(() => {
    const saved = localStorage.getItem("kanban-columns");

    return saved
      ? JSON.parse(saved)
      : [
        { id: "todo", title: "Todo" },
        { id: "doing", title: "Doing" },
        { id: "done", title: "Done" }
      ];
  });

  const [board, setBoard] = useState(() => {
    try {
      const saved = localStorage.getItem("kanban-board");
      return saved ? JSON.parse(saved) : { todo: [], doing: [], done: [] };
    } catch {
      return { todo: [], doing: [], done: [] };
    }
  });

  useEffect(() => {
    localStorage.setItem("kanban-board", JSON.stringify(board));
  }, [board]);

  useEffect(() => {
    localStorage.setItem("kanban-columns", JSON.stringify(columns));
  }, [columns]);

  useEffect(() => {
    if (showAddModal && addInputRef.current) {
      addInputRef.current.focus();
    }
  }, [showAddModal]);


  function addColumn() {
    const name = newColumnName.trim();

    if (!name) {
      alert("Please enter a column name!");
      return;
    }

    const id = name.toLowerCase().replace(/\s+/g, "-");

    if (board[id]) {
      alert("Column already exists!");
      return;
    }

    setColumns([...columns, { id, title: name }]);
    setBoard({ ...board, [id]: [] });

    setNewColumnName("");
    setShowAddModal(false);
  }

  function addCard(column, text, id) {
    const newBoard = { ...board };
    newBoard[column].push({ id, text, done: false });
    setBoard(newBoard);
  }

  function deleteCard(column, id) {
    const newBoard = { ...board };
    newBoard[column] = newBoard[column].filter(c => c.id !== id);
    setBoard(newBoard);
  }

  function moveCard(from, to, id) {
    const card = board[from].find(c => c.id === id);

    const newBoard = { ...board };
    newBoard[from] = newBoard[from].filter(c => c.id !== id);
    newBoard[to].push(card);

    setBoard(newBoard);
  }

  function reorder(column, index, direction) {
    const newCards = [...board[column]];

    if (direction === "up" && index > 0) {
      [newCards[index], newCards[index - 1]] =
        [newCards[index - 1], newCards[index]];
    }

    if (direction === "down" && index < newCards.length - 1) {
      [newCards[index], newCards[index + 1]] =
        [newCards[index + 1], newCards[index]];
    }

    setBoard({ ...board, [column]: newCards });
  }

  function editCard(column, id, newText) {
    if (!newText.trim()) return;
    setBoard(prev => ({
      ...prev,
      [column]: prev[column].map(card =>
        card.id === id ? { ...card, text: newText } : card
      )
    }));
  }

  function toggleDone(column, id) {
    const newBoard = { ...board };

    newBoard[column] = newBoard[column].map(card =>
      card.id === id ? { ...card, done: !card.done } : card
    );

    setBoard(newBoard);
  }

  function clearBoard(action) {
    if (action === "open") {
      setShowModal(true);
      return;
    }

    if (action === "confirm") {
      const empty = {};
      columns.forEach(col => empty[col.id] = []);
      setBoard(empty);
    }

    setShowModal(false);
  }

  function deleteColumn(columnId) {
    const fixed = ["todo", "doing", "done"];

    if (fixed.includes(columnId)) {
      alert("Default columns cannot be deleted!");
      return;
    }

    setColumns(columns.filter(c => c.id !== columnId));

    const newBoard = { ...board };
    delete newBoard[columnId];
    setBoard(newBoard);
  }

  return (
    <div>

      <div className="top-buttons">
        <button onClick={() => clearBoard("open")}>
          Clear Board
        </button>

        <button onClick={() => setShowAddModal(true)}>
          Add Column
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-box">
            <p>Clear the board?</p>

            <button onClick={() => clearBoard("confirm")}>Yes</button>
            <button onClick={() => clearBoard()}>Cancel</button>
          </div>
        </div>
      )}

      {columns.map(col => (
        <Column
          key={col.id}
          title={col.title}
          name={col.id}
          cards={board[col.id] || []}
          addCard={addCard}
          deleteCard={deleteCard}
          moveCard={moveCard}
          reorder={reorder}
          editCard={editCard}
          toggleDone={toggleDone}
          deleteColumn={deleteColumn}
        />
      ))}

      {showAddModal && (
        <div className="modal">
          <div className="modal-box">
            <p>Enter column name:</p>

            <input
              ref={addInputRef}
              value={newColumnName}
              onChange={(e) => setNewColumnName(e.target.value)}
            />

            <button onClick={addColumn}>Add</button>

            <button onClick={() => {
              setShowAddModal(false);
              setNewColumnName("");
            }}>
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
