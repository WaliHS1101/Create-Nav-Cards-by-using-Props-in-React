import React from 'react'

function Cards(props) {
    return (
        <div className="card mt-2" style={{ width: "18rem" }}>
            <img src={props.img} alt="" className="card-img-top" style={{ height: "200px" }} />
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <h5 className="card-title">{props.price}</h5>
                <p className="card-text">{props.dec}</p>
                <a href="#" className="btn btn-primary">See More</a>
            </div>
        </div>
    )
}

export default Cards