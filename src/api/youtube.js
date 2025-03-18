import axios from 'axios';

const API_KEY = 'AIzaSyBUeeIJFiAOdBM_k697aPja9V1D8EJcrGo'; // Substitua pela sua chave da API do YouTube
const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const VIDEO_DETAILS_URL = 'https://www.googleapis.com/youtube/v3/videos';

export const searchVideos = async (query) => {
    try {
        const searchResponse = await axios.get(SEARCH_URL, {
            params: {
                part: 'snippet',
                q: query,
                key: API_KEY,
                maxResults: 50,
                type: 'video'
            }
        });

        const videoIds = searchResponse.data.items.map(item => item.id.videoId).join(',');

        const detailsResponse = await axios.get(VIDEO_DETAILS_URL, {
            params: {
                part: 'snippet,contentDetails,statistics,recordingDetails',
                id: videoIds,
                key: API_KEY
            }
        });

        return detailsResponse.data;
    } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
        throw error;
    }
};