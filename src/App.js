import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/movieRow';

export default () => {

    const[movieList, setMovieList] = useState([]);

    useEffect(()=>{
        const loadAll = async () => {
            //pegando a lista total
            let list = await Tmdb.getHomelist();
            setMovieList(list);
        }

        loadAll();
    }, [] )

    return (
        <div className="page">
            <section className="lists">
                {movieList.map((item, key)=>(
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
        </div>
    );
}