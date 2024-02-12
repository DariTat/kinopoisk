import { useState } from "react"

export const FilterFilms = ({type, setData, popular, setPopular}) => {
    const [showList, setShowList] = useState(false);

    const onClickFilter = (event) => {
        setPopular(event.target.textContent)
        setData(prevData => ({...prevData, type: event.target.id}))
        setShowList(!showList)
    }

    return (
        <div className="block-sorted">
            <div className="dropdown">
                <button className="btn dropdown-toggle button-sort"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setShowList(!showList)}>
                    показать:
                </button>
                <ul className={showList ? "dropdown-menu dropdown-sorted show" : "dropdown-menu dropdown-sorted"} aria-labelledby="dropdownMenuButton">
                    {type?.map(item => (
                        <li key={item.id}>
                            <a className="dropdown-item sort-item" id={item.id} href="#" onClick={onClickFilter}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <span className="sort-text">{popular}</span>
        </div>
    )
}