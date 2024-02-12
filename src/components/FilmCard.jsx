import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setIdSelected } from "../redux/slice/filmSlice"


export const FilmCard = ({item}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleClick = (id) => {
        dispatch(setIdSelected(id))
        navigate(`/film/${id}`) 
    }


    return (
        <div className="col-3" key={item.kinopoiskId} onClick={() => handleClick(item.kinopoiskId)}>
            <div className="card">
                <img src={item.posterUrlPreview} className="card-img-top img-top" alt={item.nameRu}/>
            </div>
        </div>
    )
}