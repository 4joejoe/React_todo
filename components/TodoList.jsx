const TodoList = (props) => {
  return (
    <div>
      <ul>{props.children}</ul>
    </div>
  );
};
export default TodoList;
