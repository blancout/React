import React from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Lavar Louças", done: false },
    { id: 2, text: "Lavar Roupas", done: false },
    { id: 3, text: "Tomar Banho", done: false }
  ]);

  return (
    <div>
      <h1>Lista Tarefas</h1>
      <TodoList todos={todos} />
      <AddTodo />
    </div>
  );

  function TodoList(props) {
    return (
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    );
  }

  function AddTodo() {
    function handleAddTodo(event) {
      event.preventDefault();
      const text = event.target.elements.addTodo.value;
      const todo = {
        id: 4,
        text,
        done: false
      };
      setTodos(0);
    }

    return (
      <form onSubmit={handleAddTodo}>
        <input name="addTodo" placeholder="Adicionar Tarefa" />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
