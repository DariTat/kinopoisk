import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFilms} from "../api"
import { FilmCard } from "./FilmCard"



export const MainPage = () => {
    const { topFilms } = useSelector(state => state.films)
    const dispatch = useDispatch()
    const { items, total } = topFilms
    const [num, setNum] = useState(7)

  
    useEffect(() => {
        dispatch(fetchFilms('/premieres?year=2024&month=JANUARY'))
    }, [])

    const handleClick = () => {
        setNum(total)
    }

    return (
        <>
            <div className="main">
                <div className="row">
                    <div className="col">
                        <section className="premieres-films">
                            <h5 style={{ marginBottom: '2rem'}}>Премьеры</h5>
                            <div className="row premieres">
                                { items?.map((item, index) => (
                                    index <= num ?
                                    <FilmCard key={item.kinopoiskId} item={item} /> : null
                                ))}
                               
                            </div>
                            { num < total && 
                                    <button className="btn btn-premiers" onClick={handleClick}>Загрузить ещё</button>
                            }  
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}