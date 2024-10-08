import { useReducer, useState } from "react";
import AddTask from "../components/AddTask.jsx";
import Tasks from "../components/Tasks.jsx";


let Id =3;
function reduceData(state, action) {
    switch (action.type) {
      case 'delete': {
        return state.filter(item => item.id !== action.payload)
      } 
      case 'toggleComplete': {
        return state.map(item => 
          item.id === action.payload ? { ...item, completed: !item.completed } : item
        );
      }
      case 'edit': {
        return state.map(item =>
          item.id === action.payload.id ? { ...item, task: action.payload.newTitle } : item
        );
      }
      case 'add': {
        return [...state, { id: Id++, task: action.payload, completed: false }]  }
      default:
        return state;
    }
  }
  
  
  export default function Todo() {
    const [items, dispatch] = useReducer(reduceData, initialState);
  
    const handleDelete = id => dispatch({ type: 'delete', payload: id });
    const handleToggleComplete = id => dispatch({ type: 'toggleComplete', payload: id });
    const handleEdit = (id, newTitle) => dispatch({ type: 'edit', payload: {id, newTitle} })
    const handleAdd = (newTitle) => dispatch({ type: 'add', payload: newTitle} )
   
    return (
      <div className="main">
        <h1>To Do List</h1>
        {items.map((item) => 
          <Tasks 
            key={item.id} 
            {...item} 
            onDelete={handleDelete}
            onToggleComplete={handleToggleComplete}
            onEdit = {handleEdit}
          />)}
        <AddTask onAdd={handleAdd} />
      </div>
    )
  }
  
  //export default App

const initialState = [
  {
    "id": 1,
    "task": "learn about the different breed",
    "completed": true
  },
  {
    "id": 2,
    "task": "learn what cat eat",
    "completed": false
  },
  {
    "id": 3,
    "task": "do cat homework",
    "completed": false
  },
];