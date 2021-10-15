const API_KEY = '373a4af92bc1f686b2e84329862e0ec1';
const API_BASE = 'https://api.themoviedb.org/3';

/*
-Originais da netflix
-recomendados(trending)
-em alta(top rated)
-ação
-comédia
-romance
-terror
-documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomelist: async () => {
        return [
            {
                slug:'originals',
                title:'Originais do Netflix',
                items: await basicFetch (`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug:'trending',
                title:'Recomendados',
                items: await basicFetch (`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:'Em Alta',
                items: await basicFetch (`/movie/toprated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:'Ação',
                items: await basicFetch (`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:'Comedia',
                items: await basicFetch (`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:'Terror',
                items: await basicFetch (`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title:'Romance',
                items: await basicFetch (`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'docmentary',
                title:'Documentários',
                items: await basicFetch (`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    }
}