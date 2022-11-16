'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSearch('');
    router.push(`/search/${search}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border-2 p-2 rounded-lg mr-2"
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="bg-blue-200 rounded-xl p-2">
        Search
      </button>
    </form>
  );
}
