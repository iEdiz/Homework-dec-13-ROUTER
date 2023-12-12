import axios from "axios";

export const getSongs = async () => {
    try {
        const response = await axios.get('http://localhost:3001/songs');
        const songsData = response.data.songs || [];
        return songsData;
     } catch (error) {
        console.error('Error getting song data', error);
        return [];
     }
}

export const createSong = async ( { name, performer, description, releaseYear, image} ) => {
    try {
        await axios.post('http://localhost:3001/song', {
            name,
            performer,
            description,
            releaseYear,
            image,
        })
    } catch (error) {
        console.error('Error getting song data', error);
    }
}
