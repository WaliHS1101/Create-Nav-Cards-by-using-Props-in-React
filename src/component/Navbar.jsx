import React from 'react'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">{props.NBrand}</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Nav-Bar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="Nav-Bar">
                    <ul className="navbar-nav">
                        {props.Link.map((elements) => {
                            return (
                                <li className="nav-item">
                                    <a href="#" className="nav-link">{elements}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

Navbar.defaultProps = {
    NBrand: "Web Brand"
}