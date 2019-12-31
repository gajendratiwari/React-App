import axios from 'axios';

const KEY = 'AIzaSyCPzk6lmSN7az4go3R5p2_qoGQWHW0B1v8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: `${KEY}`

    }
});