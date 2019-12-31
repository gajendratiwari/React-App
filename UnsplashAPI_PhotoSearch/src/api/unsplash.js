import axios from 'axios';


export default axios.create({
 baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 077b6fd9187e7a91f12209385c3d53e69e64fe93b3d63878ef12718a90c38ffa'
    }
});