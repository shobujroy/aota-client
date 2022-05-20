import React from 'react'

function MemberCard() {
    return (
        <div style={{ width: '18rem', margin: "2rem" }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-row justify-content-between align-items-center">
                <div>
                    <h5 className="card-title text-primary">Jacob Flores</h5>
                    <p>FOUNDER/ARTIST</p>
                </div>
                <div>
                    <i class="fa-brands fa-instagram fs-3"></i>
                </div>
            </div>
        </div>
    )
}

export default MemberCard