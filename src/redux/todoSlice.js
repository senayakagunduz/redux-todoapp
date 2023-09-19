import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice(
    {
        name: "todos",
        initialState: [
            { id: 1, title: "todo1", completed: false },
            { id: 2, title: "todo2", completed: false },
            { id: 3, title: "todo3", completed: true },
        ],
        reducers: {
            addTodo: (state, action) => {
                const newTodo = {
                    id: Date.now(),
                    title: action.payload.title,
                    completed: false
                };
                state.push(newTodo);
            },
            toggleComplete:(state, action)=>{
                const index=state.findIndex(
                   (todo)=>todo.id===action.payload.id 
                );
                state[index].completed=action.payload.completed;
            },
            deleteTodo:(state,action)=>{
               return state.filter((todo)=>todo.id!=action.payload.id);
            },
            editTodo:(state,action)=>{
                const{id, newText}=action.payload;
                const todoToEdit=state.find((todo)=>todo.id===id);
                if(todoToEdit){
                    todoToEdit.title=newText;
                } 
            }

        }
    }
)
export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;