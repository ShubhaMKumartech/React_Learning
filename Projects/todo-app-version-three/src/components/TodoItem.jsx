import cd from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className={cd.main}>
        <div className= {cd.todoitem}>
        {todoName}
        </div>
        <div className = {cd.tododate}>
        {todoDate}
        </div>
        <div className= {cd.button}>
          <button
            type="button"
            className={cd.button}
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
  );
}

export default TodoItem;
