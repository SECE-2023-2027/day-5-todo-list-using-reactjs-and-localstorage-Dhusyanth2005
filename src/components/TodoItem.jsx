export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center bg-gray-50 p-2 rounded shadow">
      <span
        onClick={onToggle}
        className={`cursor-pointer flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}
      >
        {todo.text}
      </span>
      <button
        onClick={onDelete}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  )
}
