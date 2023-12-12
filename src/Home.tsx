import { useQuery } from "@tanstack/react-query";
import { getSongs } from "./api/posts";

export const Home = () => {
  const postsQuery = useQuery({
    queryKey: ['songs'],
    queryFn: getSongs,
  });

  if (postsQuery.status === 'pending') return <h1>Loading...</h1>;
  if (postsQuery.status === 'error') return <h1>{JSON.stringify(postsQuery.error)}</h1>;

  return (
    <div>
      <h1>Welcome to home screen</h1>
      
    </div>
  );
};
