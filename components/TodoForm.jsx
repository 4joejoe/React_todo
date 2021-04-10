const TodoForm = ({ inputValue, onChangeHandler, onSubmitHandler }) => {
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={inputValue}
          onChange={onChangeHandler}
          type="input"
          name="userInput"
          placeholder="todo.."
        />
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
};
export default TodoForm;
