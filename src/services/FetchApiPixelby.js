import axios from "axios";

const BASE_URL = "https://pixabay.com/api/"
const API_KEY = "30986553-a898811d242c2530c8a957c11"


export const fetchPhoto = async (searchWord, page) => {
    
    const response = await axios.get(BASE_URL, {
        method: "get",
        params: {
            key: API_KEY,
            q: searchWord,
            per_page: 12,
            page: page,
            image_type: "photo"

        }
    })

    return response.data.hits

}


