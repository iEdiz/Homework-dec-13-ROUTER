import { useQuery } from '@tanstack/react-query';
import { getSongs } from './api/posts';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteSong } from './api/posts';

type Song = {
    id: number,
    name: string,
    performer: string,
    description: string,
    releaseYear: string,
    image: string,
}

export const SongDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    const postsQuery = useQuery({
        queryKey: ['songs'],
        queryFn: getSongs,
    });

    if (postsQuery.status === 'pending') return <h1>Loading...</h1>;
    if (postsQuery.status === 'error') return <h1>{JSON.stringify(postsQuery.error)}</h1>;

    const selectedSong = postsQuery.data.find((song: Song) => song.id === Number(id));

    const handleDelete = async () => {
        await deleteSong({ id: selectedSong.id });
        navigate('/songs');
    }

    return (
        <div className='clicked-image-wrapper'>
            <div key={selectedSong.id} className='clicked__song'>
            <img src={selectedSong.image} alt='Medieval image' className='clicked__image' />
            <h1 className='title'>{selectedSong.name}</h1>
            <h3 className='performer'>{selectedSong.performer}</h3>
            <h5 className='description'>{selectedSong.description}</h5>
            <h6 className='releaseYear'>{selectedSong.releaseYear}</h6>
            <div className='song__buttons'>
                <button className='js-song-delete song__delete' onClick={handleDelete}>Delete</button>
            </div>
            </div>
        </div>
    );
};
