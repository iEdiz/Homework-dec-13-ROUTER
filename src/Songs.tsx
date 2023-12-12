import { useQuery } from "@tanstack/react-query";
import { getSongs } from "./api/posts";

export const Songs = () => {
  const postsQuery = useQuery({
    queryKey: ['songs'],
    queryFn: getSongs,
  });

  if (postsQuery.status === 'pending') return <h1>Loading...</h1>;
  if (postsQuery.status === 'error') return <h1>{JSON.stringify(postsQuery.error)}</h1>;

  return (
    <div>
      <h1 className="song-title">Songs</h1>
      <div className="song-wrapper">
          {postsQuery.data.map((song) => (
            <div key={song.id} className='song'>
            <img src={song.image} alt="Medieval image" className='images'/>
            </div>
          ))}
        </div>
    </div>
  );
};
