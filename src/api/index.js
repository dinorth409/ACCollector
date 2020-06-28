import axios from 'axios'

const songsUrl = 'http://acnhapi.com/v1/songs/'
const artUrl = 'http://acnhapi.com/v1/art/'

export const fetchSongs = async () => {
    try {

        const { data } = await axios.get(songsUrl)

        return data
        
    } catch (error) {
        console.log(error)
    }
}

export const fetchArt = async () => {
    try {
        const { data } = await axios.get(artUrl)
        return data
    } catch (error) {
        console.log(error)
    }
}