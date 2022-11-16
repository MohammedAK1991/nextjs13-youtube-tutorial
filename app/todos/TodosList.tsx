import Link from 'next/link';
import { Todo } from '../../types';

async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();
  return todos;
}

export default async function TodosList() {
  const todos = await fetchTodos();
  return (
    <div className="bg-green-200 max-w-fit p-4 flex-col">
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}> Todo: {todo.id}</Link>
        </p>
      ))}
    </div>
  );
}
