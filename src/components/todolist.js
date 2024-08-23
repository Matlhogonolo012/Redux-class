import { useSelector, useDispatch } from "react-redux";
import { deleteTodoItem, editToDoItem } from "../redux/todoListReducer";
import { useState } from "react";

function TodoList() {
  const todoList = useSelector((state) => state.todoList);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const dispatch = useDispatch();

  const handleEdit = (id, textEdited) => {
    setEditingId(id);
    setEditText(textEdited);
  };

  return (
    <ol>
      {todoList.map((item) => (
        <div>
          <li key={item.id}>{item.todoItem}</li>
          <button onClick={() => dispatch(deleteTodoItem(item.id))}>
            delete
          </button>
          <button onClick={() => dispatch(editToDoItem(item.id))}> Edit</button>{" "}
          {/* ({todoList.length === 0}?{" "}
          <p className="no-recipes-message">You have not added any tasks</p>): (
          ) */}
        </div>
      ))}

      
    </ol>
  );
}

export default TodoList;
