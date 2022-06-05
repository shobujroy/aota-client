import React, { useEffect, useState } from 'react'

function Questions({ questionNum, question, answer, index, collapsed, setCollapsed }) {

    return (
        <div className="accordion-item">
            <h2 className="accordion-header fn-montserrat" id={`flush-headingOne${ questionNum }`}>
                <button onClick={() => {
                    if (questionNum === collapsed) {
                        setCollapsed(null)
                        return;
                    }
                    setCollapsed(questionNum);
                }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${ questionNum }`} aria-expanded="false" aria-controls={`flush-collapseOne${ questionNum }`}>
                    {
                        questionNum === collapsed
                            ? <span className='me-3'><i className="fa-solid fa-minus"></i></span>
                            : <span className='me-3'><i className="fa-solid fa-plus"></i></span>
                    }
                    {question}
                </button>
            </h2>
            <div id={`flush-collapseOne${ questionNum }`} className="accordion-collapse collapse" aria-labelledby={`flush-headingOne${ questionNum }`} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body fn-futura ps-5">
                    {answer}
                </div>
            </div>
        </div>
    )
}

export default Questions