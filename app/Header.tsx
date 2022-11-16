import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-5 bg-blue-800">
      <Link
        href="/"
        className="px-2 py-1 bg-white text-blue-500 rounded-xl mr-2"
      >
        Home
      </Link>
      <Link
        href="/todos"
        className="px-2 py-1 bg-white text-blue-500 rounded-xl"
      >
        Todos
      </Link>
      <Link
        href="/search"
        className="px-2 py-1 bg-white text-blue-500 rounded-xl"
      >
        Search
      </Link>
    </header>
  );
}
