import axios from "axios";

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
        key: `AIzaSyBUdVzC-PW0qCyyWF9k95g8Dpr6piECHjQ`
    }
});
