import React from 'react'
import Cards from './Cards'
import Products from "./Propuct"

function CardSection() {
    return (
        <div className='container'>
            <div className="d-flex flex-wrap justify-content-around align-items-center ">
                {Products.map((item, index) => {
                    return (

                        <Cards
                            title={Products[index].name}
                            price={Products[index].price}
                            img={Products[index].img}
                            dec={Products[index].dec}
                        />
                    )
                })}
            </div>
        </div>

    )
}

export default CardSection