import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Todo(props) {
  const dlt = () => {
    console.log(todo.id);
    fetch(`https://todoappmy.glitch.me/todos/${todo.id}`, { method: "DELETE" })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  const edit = () => {
    console.log(todo.id);
    const editTodo = {
      title: prompt(`Please enter a New Title:`),
      description: prompt(`Please enter a New Title:`),
      status: "Not Done",
    };
    fetch(`https://todoappmy.glitch.me/todos/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify(editTodo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };
  const todo = props.todo;
  return (
    <div
      style={{
        border: "2px solid #777777",
        margin: "10px 0",
        padding: "5px",
        paddingLeft: "10px",
        fontFamily: "sans-serif",
        color: "#555",
      }}
    >
      {" "}
      <p style={{ fontWeight: "600", color: "#555" }}>{todo.title}</p>
      <p>{todo.description}</p>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={edit}>
          Edit
        </Button>
        <Button
          style={{ backgroundColor: "red" }}
          variant="contained"
          onClick={dlt}
        >
          Delete
        </Button>
      </Stack>
      <br />
    </div>
  );
}

export default Todo;
