import React, { useState } from "react";

const Admin = ({ isAdmin }) => {
  const [rows, setRows] = useState([]);
  const [newRow, setNewRow] = useState("");
  const [auth] = useState(isAdmin);

  const handleAddRow = () => {
    if (newRow.trim() !== "") {
      setRows([...rows, { id: Date.now(), name: newRow }]);
      setNewRow("");
    } else {
      alert("Row name cannot be empty.");
    }
  };

  const handleDeleteRow = (id) => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handleEditRow = (id) => {
    const newName = prompt("Enter the new name:");
    if (newName && newName.trim() !== "") {
      setRows(
        rows.map((row) => (row.id === id ? { ...row, name: newName } : row))
      );
    } else {
      alert("Name cannot be empty.");
    }
  };

  return auth ? (
    <div>
      <h2>Admin Page</h2>
      <p>Total Rows: {rows.length}</p>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Add new row"
          value={newRow}
          onChange={(e) => setNewRow(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={handleAddRow} style={{ padding: "8px 16px" }}>
          Add
        </button>
      </div>

      <ul>
        {rows.map((row) => (
          <li key={row.id} style={{ marginBottom: "10px" }}>
            <span>{row.name}</span>
            <button
              onClick={() => handleEditRow(row.id)}
              style={{ marginLeft: "10px", padding: "5px 10px" }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteRow(row.id)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                background: "red",
                color: "white",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h3>You do not have admin access.</h3>
  );
};

export default Admin;
