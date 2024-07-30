import { useState } from "react";
import styles from "./AddTodo.module.css";
import { MdOutlineAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <form onSubmit={handleAddButtonClicked}>
      <div className={styles.main}>
      <div className={styles.innermain}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
          <div className={styles.Dateinput}>
            <input type="date" value={dueDate} onChange={handleDateChange} />
          </div>
        </div>

        <div className={styles.mainbutton}>
          <button 
            type="submit"
            className={styles.button}
            
          >
            <MdOutlineAddComment />
          </button>
        </div>
      </div>
    </div>
    </form>
  );
}

export default AddTodo;
