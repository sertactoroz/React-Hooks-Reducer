import { useReducer } from "react";
import reducer from "./reducers/todoReducer";
function App() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: ''
  });

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch({
      type:'ADD_TODO',
      todo: state.todo
    })
  };
  const handleChange = (e) => {
    //setTodo(e.target.value);
    dispatch({
      type: "SET_TODO",
      value: e.target.value
    });
  };


  // const deleteItem = (id) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // };
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={submitHandle}>
        <input type="text" value={state.todo} onChange={handleChange}></input>
        <button disabled={!state.todo} type="submit">
          Ekle
        </button>
      </form>
      <ul>
        {state.todos.map((todoItem, index) => (
          <li key={index}>{todoItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
