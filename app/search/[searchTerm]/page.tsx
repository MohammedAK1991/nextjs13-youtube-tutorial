type SearchResults = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    },
  ];
};

async function search(searchTerm: string) {
  const res = await fetch(
    `https://serpapi.com/search.json?engine=google&q=${searchTerm}&api_key=${process.env.SERP_API_KEY}`,
  );
  // throw new Error('whooops');
  const data: SearchResults = await res.json();
  return data;
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: { searchTerm: string };
  searchParams: { id: string };
}) {
  const searchResults = await search(params.searchTerm);
  return (
    <>
      <p className="p-2">You searched for{params.searchTerm}</p>
      <p>{searchParams.id}</p>
      <ol className="space-y-5 p-5">
        {searchResults.organic_results.map((result) => (
          <li key={result.position} className="list-disc">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
