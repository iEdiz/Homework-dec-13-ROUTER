import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { createSong } from "./api/posts";

const maxPictures = 20;

const getRandomImage = () => {

    let randomNumbers = Math.floor(Math.random() * maxPictures)

    if (randomNumbers === 0) {
        randomNumbers++;
    }

    return `https://generatorfun.com/code/uploads/Random-Medieval-image-${randomNumbers}.jpg`
}

export const CreatePost = () => {
    const nameRef = useRef();
    const performerRef = useRef();
    const descriptionRef = useRef();
    const releaseYearRef = useRef();
    const createPostMutation = useMutation({
        mutationFn: createSong,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        createPostMutation.mutate({
            name: nameRef.current.value,
            performer: performerRef.current.value,
            description: descriptionRef.current.value,
            releaseYear: releaseYearRef.current.value,
            image: getRandomImage(),
        })
        
    }
    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" ref={nameRef}/>
                </div>
                <div>
                    <label htmlFor="performer">Performer</label>
                    <input id="performer" ref={performerRef}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input id="description" ref={descriptionRef}/>
                </div>
                <div>
                    <label htmlFor="releaseYear">Release Year</label>
                    <input id="releaseYear" ref={releaseYearRef}/>
                </div>
                <button type="submit">
                    {createPostMutation.isLoading ? 'Loading...' : 'Create'}
                </button>
            </form>
        </div>
    
    )
}

