import Item from "../../../../Fragments/learning-fragments/src/components/Item";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map(item => <TodoItem todoDate = {item.dueDate}
         todoName={item.name}></TodoItem>)}
      </div>
    </>
  );
};

export default TodoItems;
