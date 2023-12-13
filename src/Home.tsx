import { useQuery } from "@tanstack/react-query";
import { getSongs } from "./api/posts";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const postsQuery = useQuery({
    queryKey: ['songs'],
    queryFn: getSongs,
  });

  const navigate = useNavigate();

  if (postsQuery.status === 'pending') return <h1>Loading...</h1>;
  if (postsQuery.status === 'error') return <h1>{JSON.stringify(postsQuery.error)}</h1>;

  return (
    <div className="home-wrapper">
      <h1 className="home__header">Welcome to song mountain 🎵</h1>
      <p className="home__paragraph">Click the image to check out the songs or just head over to songs tab above</p>
      <img
        src="/assets/capybara.png"
        alt="cat"
        className="home__image"
        onClick={() => {
          navigate('/songs')
        }}
      />
    </div>
  );
};
