import { useQuery } from "@tanstack/react-query";
import { getSongs } from "./api/posts";
import { useState } from "react";

export const About = () => {
  const postsQuery = useQuery({
    queryKey: ['songs'],
    queryFn: getSongs,
  });

  const [isSpinning, setIsSpinning] = useState(true);

  const handleImageClick = () => {
    setIsSpinning((prev) => !prev);
  };

  if (postsQuery.status === 'pending') return <h1>Loading...</h1>;
  if (postsQuery.status === 'error') return <h1>{JSON.stringify(postsQuery.error)}</h1>;

  return (
    <div className="about-wrapper">
      <h1 className="about__header">{isSpinning ? 'YOU HAVE BEEN CAT 🐈‍⬛' : 'You are no more cat 🙂'}</h1>
      <h1 className="about__header">{isSpinning ? 'Press the button to UNCAT 🫨' : 'NICE JOB 🤠'}</h1>
      <img
        src="/assets/Cat.jpg"
        alt="cat"
        className={`about__cat-image ${isSpinning ? 'spinning' : ''}`}
        onClick={handleImageClick}
      />
    </div>
  );
};
