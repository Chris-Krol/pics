import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID OcnLI4P6XeWF8Rc7IrRofNATx1IIKpNuiUJZs94eGOU',
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
};

export default searchImages;