export const Footer = () => {
    return (
        <div className="main-color">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-5 main-color">
                <p className="colo-md mb-0 text-white">© Project Library app,inc</p>
                <ul className="nav navbar-dark col-md-3 justify-content-end">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-white">
                            Home
                        </a>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-white">Search Books</a>
                        </li>
                    </li>
                </ul>
            </footer>
        </div>

    )
}