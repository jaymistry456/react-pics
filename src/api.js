import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('http://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID JYF6HX3TlIWI6UTlnKylsEWRn51bDyVDdyKOfqgoxIA'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;