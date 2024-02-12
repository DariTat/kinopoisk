import { Paginate } from "./Paginate"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createURL, fetchFilms } from "../api"
import { FilterFilms } from "./FilterFilms"
import { FilmCard } from "./FilmCard"

export const TopFilmsPage = () => {
    const { topFilms} = useSelector(state => state.films)
    const { items, totalPages } = topFilms
    const [data, setData] = useState({
        "type": 'TOP_POPULAR_ALL',
        "page": 1
    })

    const [popular, setPopular] = useState('Популярные')
    const dispatch = useDispatch()
    
    const type = [
        {id: "TOP_POPULAR_ALL", name: 'Популярные'},
        {id: "TOP_POPULAR_MOVIES", name: 'Популярные фильмы'},
        {id: "TOP_250_TV_SHOWS", name: 'Топ 250 ТВ шоу'},
        {id: "TOP_250_MOVIES", name: 'Топ 250 фильмов'},
        {id: "VAMPIRE_THEME", name: 'Вампиры'},
        {id: "COMICS_THEME", name: 'Комиксы'},
        {id: "CLOSES_RELEASES", name: 'Закрытые релизы'},
        {id: "FAMILY", name: 'Семейные'},
        {id: "LOVE_THEME", name: 'Любовь'},
        {id: "ZOMBIE_THEME", name: 'Зомби'},
        {id: "CATASTROPHE_THEME", name: 'Катастрофы'},
        {id: "KIDS_ANIMATION_THEME", name: 'Детские'} 
    ]

    useEffect(() => {
        const url = createURL(data)
        dispatch(fetchFilms(`/collections?${url}`))
    }, [data])

    useEffect(() => {
        const  url = createURL(data)
        dispatch(fetchFilms(`/collections?${url}`))
    }, [])


    return (
        <>
            <main className="main">
                <FilterFilms type={type} setData={setData} popular={popular} setPopular={setPopular}/>
                <div className="row">
                    <div className="col">
                        <section className="catalog-top_films">
                            <div className="row">
                                {items?.map(item => (
                                    <FilmCard key={item.kinopoiskId} item={item} />
                                ))}
                            </div>
                        </section> 
                        {items?.length > 0 && 
                            <Paginate count={totalPages}  setData={setData}/>
                        }
                    </div>
                </div>
            </main>
        </>
    )
}