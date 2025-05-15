
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {todos.length === 0 ? (
        <p className="p-4 text-center text-gray-500">No tasks added yet!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoList;