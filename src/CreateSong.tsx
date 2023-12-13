import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { createSong } from "./api/posts";
import { useNavigate } from "react-router-dom";

const maxPictures = 20;

const getRandomImage = () => {

    let randomNumbers = Math.floor(Math.random() * maxPictures)

    if (randomNumbers === 0) {
        randomNumbers++;
    }

    return `https://generatorfun.com/code/uploads/Random-Medieval-image-${randomNumbers}.jpg`
}

export const CreateSong = () => {
    const navigate = useNavigate();
    const nameRef = useRef<HTMLInputElement>(null);
    const performerRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const releaseYearRef = useRef<HTMLInputElement>(null);

    const CreateSongMutation = useMutation({
        mutationFn: createSong,
        onSuccess: () => {
            navigate('/songs');
        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        CreateSongMutation.mutate({
            name: nameRef.current?.value || '',
            performer: performerRef.current?.value || '',
            description: descriptionRef.current?.value || '',
            releaseYear: Number(releaseYearRef.current?.value),
            image: getRandomImage(),
        })
    }

    return (
        <div className='form-wrapper'>
            <div className="form-background">
                <h1 className='form__header'>Create NEW Song</h1>
                <form
                onSubmit={handleSubmit} 
                className='js-song-edit-form song-form' >
                    <input
                    type='text'
                    className='song__title'
                    placeholder='Song name...'
                    ref={nameRef}
                    />
                    <input
                    type='text'
                    className='song__performer'
                    placeholder='Song performer...'
                    ref={performerRef}
                    />
                    <input
                    type='text'
                    className='song__description'
                    placeholder='Song description...'
                    ref={descriptionRef}
                    />
                    <input
                    type='number'
                    className='song__releaseYear'
                    placeholder='Release year...'
                    ref={releaseYearRef}
                    />
                    <div className='add-button-wrapper'>
                        <button 
                        type="submit" 
                        className='song__add-button'
                        >
                            Create
                        </button>
                    </div>
                </form>
        </div>
    </div>
    )
}