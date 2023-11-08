import React from "react"
export default function About(){
    const { image, about } = props;
    return(
        <aside>
            <img src={image || 'https://via.placeholder.com/215'}/>
            <p>{about}</p>
        </aside>

    )
}