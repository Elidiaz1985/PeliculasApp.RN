import  axios  from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '2a3ef6d25c8567f61e0d9affcb4ae770',
        language: 'es-ES'
    
    
    }
})

export default movieDB;