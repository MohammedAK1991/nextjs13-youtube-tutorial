import { Todo } from '../../../types';
import { notFound } from 'next/navigation';

type PageProps = {
  params: {
    todoId: string;
  };
};

export const dynamicParams = true;

async function fetchTodo(todoId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  const todo: Todo = await res.json();
  return todo;
}

export default async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);
  if (!todo.id) {
    return notFound();
  }
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg rounded-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed:{todo.completed ? 'yes' : 'no'} </p>
      <p className="border-t border-black mt-5 text-right">
        {' '}
        By User: {todo.userId}
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos: Todo[] = await res.json();
  return todos
    .splice(0, 10)
    .map((todo) => ({ todoId: todo.id.toLocaleString() }));
}
