import { NavLink, Outlet } from "react-router-dom";

const FeaturesPage = () => {
    return (
        <>

            <div className="fetures-section">
                <h1>Features We Offer..</h1>

                <div className="feature-container">
                    {/* Mini Navbar */}
                    <nav className="feature-nav">
                        <ul className="nav-links">

                            <li>
                                <NavLink className="list-item" to="/features/region">By Region</NavLink>
                            </li>
                            <li>
                                <NavLink className="list-item" to="/features/name">By Name</NavLink>
                            </li>
                            <li>
                                <NavLink className="list-item" to="/features/ing">By Ingredion</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* Cards */}
                    <div className="cards-container">
                        <div className="card1">
                            <h2>Search By Region</h2>
                            <p className="card-para">
                                You will get the food recipe of the region you want
                            </p>
                            <NavLink to="/features/region">
                                <button className="btn-navlink">Let's Taste</button>
                            </NavLink>
                        </div>

                        <div className="card2">
                            <h2>Search By Name</h2>
                            <p className="card-para">
                                You will get the food recipe by name you want
                            </p>
                            <NavLink to="/features/name">
                                <button className="btn-navlink">Let's Taste</button>
                            </NavLink>
                        </div>

                        <div className="card3">
                            <h2>Search By Ingredion</h2>
                            <p className="card-para">
                                You will get the food recipe by ingredion you want
                            </p>
                            <NavLink to="/features/ing">
                                <button className="btn-navlink">Let's Taste</button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* This renders Region / Name / Ingredion based on the route */}
            </div>


            <div>
                <Outlet />
            </div>
        </>

    );
}

export default FeaturesPage;