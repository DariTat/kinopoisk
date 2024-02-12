import { NavLink } from "react-router-dom"

export const Header = () => {
    

    return(
        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>Logo</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/top'>Топ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/films'>Фильмы</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/news'>Новости</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}