import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createURL, fetchMediaPosts } from "../api"
import { Paginate } from "./Paginate"


export const NewsPage = () => {
    const { news } = useSelector(state => state.films)
    const { items, totalPages } = news
    const [active, setActive] = useState('')
    const [data, setData] = useState({"page": 1})
    const dispatch = useDispatch()

    useEffect(() => {
        const url = createURL(data)
        dispatch(fetchMediaPosts(`?${url}`))
    }, [data.page])

    useEffect(() => {
        const url = createURL(data)
        dispatch(fetchMediaPosts(`?${url}`))
    }, [])


    const formatDate = (value) => {
        const date = new Date(value)
        const year = date.toLocaleString('default', {year: 'numeric'});
        const month = date.toLocaleString('default', {
          month: '2-digit',
        });
        const day = date.toLocaleString('default', {day: '2-digit'});
      
        return [year, month, day].join('.');
      }
      
    const handleClick = (event) => {
        if (active === event.target.id) {
            setActive('')
        } else {
            setActive(event.target.id)
        }
    }
      

    return (
        <>
            <main className="main">
                <div className="row">
                    <div className="col">
                       <h5 className="title-news">Новости кино</h5>
                       <section className="catalog-news">
                            <div className="row">
                                {items?.map(item => (
                                    <div className="col-3 card-news-block" key={item.kinopoiskId}>
                                        <div className={item.kinopoiskId == active ? "card card-news active" : "card card-news"} key={item.kinopoiskId} onClick={handleClick}>
                                            <img src={item.imageUrl} id={item.kinopoiskId} className="card-img-top img-news" alt={item.title}/>
                                            <div className={item.kinopoiskId == active ? "card-body active" : "card-body"} id={item.kinopoiskId} >
                                                <h6 className="card-text card-title-news" id={item.kinopoiskId}>{item.title} </h6>
                                                <p className="card-text news-text">{item.description}</p> 
                                                <p className='card-text news-data'>{formatDate(item.publishedAt)}</p>
                                                <a href={item.url} className="nav-link news-link">Подробнее</a>     
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section> 
                        { items?.length > 0 && 
                            <Paginate count={totalPages} setData={setData}/>
                        }
                    </div>
                </div>
            </main>
        </>
    )
}