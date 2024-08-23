import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodoItem: (state, action) => {
            state.push(action.payload);
        } ,
        deleteTodoItem : (state, action) =>{
       return state.filter(list=> list.id !==action.payload)

        },
        editToDoItem: (state, action) => {
            const { id, editToDo } = action.payload;
            return state.map(item =>
                item.id === id ? { ...item, todoItem: editToDo } : item
            );
        },
    }
});


export const { addTodoItem , deleteTodoItem, editToDoItem} = todoSlice.actions;
export default todoSlice.reducer;
