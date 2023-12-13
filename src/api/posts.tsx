import axios from "axios";

type Song = {
    name: string,
    performer: string,
    description: string,
    releaseYear: string,
    image: string,
}

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

export const getSongById = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:3001/songs/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting singular song data', error);
        throw error;
    }
};

export const createSong = async ( { name, performer, description, releaseYear, image}: Song ) => {
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

export const deleteSong = async ({ id }: { id: number }) => {
    try {
        await axios.delete(`http://localhost:3001/songs/${id}`)

   } catch(error) {
       console.error('Error deleting a song', error)
   }
}
