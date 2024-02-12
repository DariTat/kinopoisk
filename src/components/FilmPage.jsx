import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchFilm } from "../api"



export const FilmPage = () => {
    const { selectedFilm, idSelected } = useSelector(state => state.films)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilm(idSelected))
        
    }, [])

    return (
        <>
            <div className="main">
                <div className="row">
                    <div className="col">
                        <section className="film-block">
                            <h4 className="card-title-film">{selectedFilm?.nameRu}</h4>
                            <div className="card card-film">
                                <img src={selectedFilm?.posterUrlPreview} className="card-img-top img-top film-img" alt={selectedFilm?.nameRu}/>
                                    <div className="card-body-film">
                                        <p className="card-text-film">{selectedFilm?.description}</p>
                                        { selectedFilm?.slogan && 
                                            <p className="card-text-film">Слоган: {selectedFilm?.slogan}</p>
                                        }
                                        <p className="card-text-film">Страна: {selectedFilm?.countries[0].country}</p>
                                        { selectedFilm?.ratingKinopoisk &&
                                            <p className="card-text-film">Рейтинг: {selectedFilm?.ratingKinopoisk}</p>                            
                                        }
                                        { selectedFilm?.ratingImdb &&
                                            <p className="card-text-film">Рейтинг Imdb: {selectedFilm?.ratingImdb}</p>
                                        }
                                        <p className="card-text-film">Жанр: {selectedFilm?.genres[0].genre} {selectedFilm?.genres[1]?.genre} {selectedFilm?.genres[2]?.genre} </p>
                                        <p className="card-text-film">Год: {selectedFilm?.year}</p>
                                    </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )

}