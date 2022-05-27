import Image from 'next/image'
import React from 'react'

function NFTcard({ src, title }) {
    return (
        <div class="card" style={{ width: "18rem" }}>
            <Image src={src} class="card-img-top img-fit" alt={title} />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
            </div>
        </div>
    )
}

export default NFTcard