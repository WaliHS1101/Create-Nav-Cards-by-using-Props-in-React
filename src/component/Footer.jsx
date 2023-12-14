import React, { useState } from 'react'

function Footer() {
    const [txt, settxt] = useState("Hello to the Website")

    return (
        <>
            <center>
                <h1>{txt}</h1>
                <input type="text" onChange={ (e)=>{settxt(e.target.value)}} />
            </center>
        </>
    )
}

export default Footer