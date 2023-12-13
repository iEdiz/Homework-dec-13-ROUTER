import { useQuery } from "@tanstack/react-query";
import { getSongs } from "./api/posts";
import { Link } from "react-router-dom";
import { useState } from "react";

type Song = {
  id: number,
  name: string,
  performer: string,
  description: string,
  releaseYear: string,
  image: string,
}

export const Songs = () => {
  const postsQuery = useQuery({
    queryKey: ['songs'],
    queryFn: getSongs,
  });

  const [hoveredSongId, setHoveredSongId] = useState<number | null>(null);

  if (postsQuery.status === 'pending') return <h1>Loading...</h1>;
  if (postsQuery.status === 'error') return <h1>{JSON.stringify(postsQuery.error)}</h1>;

  return (
    <div>
      <h1 className="song-title">ALL SONGS</h1>
      <div className="song-wrapper">
        {postsQuery.data.map((song: Song) => (
          <div
            key={song.id}
            className={`song ${hoveredSongId === song.id ? 'hover' : ''}`}
            onMouseEnter={() => setHoveredSongId(song.id)}
            onMouseLeave={() => setHoveredSongId(null)}
          >
            <Link to={`/songs/${song.id}`} className="song-individual">
              <img src={song.image} alt="Medieval image" className='images' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
