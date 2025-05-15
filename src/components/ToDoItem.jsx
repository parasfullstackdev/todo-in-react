import { useState } from 'react';
const ToDoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between p-3 border-b border-gray-200 last:border-b-0">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex-1 flex">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-2 py-1 border border-gray-300 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoFocus
          />
          <button 
            type="submit" 
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
          >
            Save
          </button>
          <button 
            type="button" 
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600 ml-2"
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <div className="flex items-center flex-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="h-5 w-5 text-blue-600 mr-3"
            />
            <span 
              className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
            >
              {todo.text}
            </span>
          </div>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default ToDoItem;