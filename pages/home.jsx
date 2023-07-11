import React from "react";
import Todo from "../componants/todoCards";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Home() {
  // States
  const [todos, setTodos] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    fetch("https://todoappmy.glitch.me/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, []);

  //   Functions
  const titleChenge = (e) => {
    setTitle(e.target.value);
  };
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const createTodo = () => {
    console.log("CreateTodo");
    if (title == "" || description == "") {
      alert("Please fill the Input");
    } else if (title != "" && description != "") {
      fetch("https://todoappmy.glitch.me/todos", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTodos(data);
          setTitle(null);
          setDescription(null);
          window.location.reload();
        });
    }
  };

  //   HTML
  return (
    <div
      style={{
        backgroundColor: "#dddddd",
        width: "320px",
        margin: "0 auto",
        padding: "1vw",
      }}
    >
      <h1 style={{ fontFamily: "sans-serif", color: "#333" }}>My Todos</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, ml: 0, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            onChange={titleChenge}
            id="outlined-search"
            label="Title"
          />
          <br />
          <TextField
            onChange={descriptionChange}
            id="outlined-helperText"
            label="Description"
          />
        </div>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button
          style={{ backgroundColor: "green" }}
          variant="contained"
          onClick={createTodo}
        >
          Create New Todo
        </Button>
      </Stack>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo} />
        </div>
      ))}
    </div>
  );
}

export default Home;
