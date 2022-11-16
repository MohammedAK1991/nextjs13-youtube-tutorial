import TodosList from './TodosList';

export default function TodosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex">
        {/* @ts-ignore */}
        <TodosList />
        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
