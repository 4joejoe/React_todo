import { Component } from "react";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import "./styles.css";

export default class App extends Component {
  state = {
    userInput: "",
    todos: [],
    todoToShow: "all"
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.userInput);
  };
  onSubmit = (event) => {
    console.log("Submited");
    this.addTodo({
      id: Date.now(),
      todoText: this.state.userInput,
      status: false
    });
    event.preventDefault();
  };
  addTodo = (todoObject) => {
    // const newTodoArray = this.state.todos.map((a) => Object.assign({}, a));
    if (this.state.userInput !== "") {
      this.setState((prevState) => ({
        todos: [todoObject, ...this.state.todos],
        userInput: ""
      }));
    }
  };
  onDone = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: !todo.status
          };
        } else {
          return {
            ...todo
          };
        }
      })
    });
  };
  onDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  };
  render() {
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
    }
    return (
      <div className="App">
        <Header />
        <TodoForm
          onSubmitHandler={this.onSubmit}
          inputValue={this.state.userInput}
          onChangeHandler={this.onChange}
        />
        <button>All</button>
        <button>Active</button>
        <button>Done</button>
        <TodoList>
          {this.state.todos.map((todo) => (
            <>
              <li key={todo.id}>
                <button onClick={() => this.onDone(todo.id)}>done</button>
                {todo.status ? (
                  <span style={{ textDecoration: "line-through" }}>
                    {todo.todoText}
                  </span>
                ) : (
                  <span>{todo.todoText}</span>
                )}

                <button onClick={() => this.onDelete(todo.id)}>delete</button>
              </li>
            </>
          ))}
        </TodoList>
      </div>
    );
  }
}
