import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Paginate } from "./Paginate"
import { createURL, fetchFilms, fetchFiltersFilm, fetchFilm } from "../api"
import { FilmCard } from "./FilmCard"


export const FilmsPage = () => {
    const {topFilms, filters} = useSelector(state => state.films)
    const [data, setData] = useState({
        'order': 'RATING',
        'type': 'ALL',
        'ratingFrom': 0,
        'ratingTo': 10, 
        'yearFrom': 1000,
        'yearTo': 2024,
        'page': 1
    })
    const { genres, countries } = filters
    const [genre, setGenre] = useState('')
    const [country, setCountry] = useState('')
    const [keyWord, setKeyWord] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const url = createURL(data)
        dispatch(fetchFilms(`?${url}`))
    }, [data.page])

    useEffect(() => {
        const url = createURL(data)
        dispatch(fetchFilms(`?${url}`))
        dispatch(fetchFiltersFilm())
    }, [])

    const changeSelect = (event) => {
        const {name, value} = event.target
        if (name === 'genres') {
            setGenre(value)
        }
        if (name === 'countries') {
            setCountry(value)
        }
        setData(prevData => ({...prevData, [name]: value}))
    }

    const handleSearch = (event) => {
        const {name, value} = event.target
        setKeyWord(value)
        setData(prevData => ({...prevData, [name]: value}))
    }

    const handleClick = () => {
        const url = createURL(data)
        dispatch(fetchFilms(`?${url}`))
    }

    
    return (
        <>
            <main className="main">
                <div className="row">
                    <div className="col">
                        <section className="catalog-films">
                            <div className="row films-block">
                                {topFilms.items?.map(item => (
                                   <FilmCard key={item.kinopoiskId} item={item} />
                                ))}
                            </div>
                            <div className="sorted-films">
                                <h5>Фильтр</h5>
                                <h6>Тип</h6>
                                <select className="form-select"  value={data.type} name='type' onChange={changeSelect}>
                                    <option value="ALL">По умолчанию</option>
                                    <option value="FILM">Фильмы</option>
                                    <option value="TV_SHOW">ТВ шоу</option>
                                    <option value="TV_SERIES">Сериалы</option>
                                    <option value="MINI_SERIES">Мини-сериалы</option>
                                </select>
                                <h6>Сортировка</h6>
                                <select className="form-select"  value={data.order} name='order' onChange={changeSelect}>
                                    <option value="RATING">По рейтингу</option>
                                    <option value="NUM_VOTE">По просмотрам</option>
                                    <option value="YEAR">По дате премьеры</option>
                                </select>
                                <h6>Жанр</h6>
                                <select className="form-select"  value={genre} name='genres' onChange={changeSelect}>
                                    <option ></option>
                                    {genres?.map(g => (
                                        <option key={g.id} value={g.id}>{g.genre}</option>
                                    ))}
                                </select>
                                <h6>Страна</h6>
                                <select className="form-select"  value={country} name='countries' onChange={changeSelect}>
                                    <option></option>
                                    {countries?.map(c => (
                                        <option key={c.id} value={c.id}>{c.country}</option>
                                    ))}
                                </select>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" name='keyword' value={keyWord} placeholder="Искать..." onChange={handleSearch}/>
                                    <label htmlFor="floatingInput">Искать...</label>
                                </div>
                                <button type="button" className="btn btn-secondary" onClick={handleClick}>Показать</button>
                            </div>
                        </section> 
                        {topFilms.items?.length > 0 && 
                            <Paginate count={topFilms.totalPages} setData={setData} />
                        }
                    </div>
                </div>
            </main>
        </>
    )
}