import React, { useEffect, useState } from 'react'
import Questions from './Questions';

function Faq() {
    const faq = [
        {
            no: 1,
            q: "What is Aliens on the AVE?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum ni Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum nLorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum n"
        },
        {
            no: 2,
            q: "How can I get access to the Creative Haven?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum ni Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum nLorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum n"
        },
        {
            no: 3,
            q: "What plans are there for AOTA?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum ni Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum nLorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum n"
        },
        {
            no: 4,
            q: "How rare are my AOTA?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum ni Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum nLorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum n"
        },
        {
            no: 9,
            q: "How can I help?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum ni Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum nLorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum n"
        },
        {
            no: 5,
            q: "What are AOTA?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum ni Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum nLorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum n"
        },
        {
            no: 6,
            q: "Will there ever be more aliens added to the collection?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum ni Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum nLorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum n"
        },
        {
            no: 7,
            q: "Where an I find you?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum ni Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum nLorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum n"
        },
        {
            no: 8,
            q: "Do I own the roghts to my AOTA?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum ni Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum nLorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum n"
        },
    ];

    const [collapsed, setCollapsed] = useState(null);
    useEffect(() => {

    }, [collapsed]);
    return (
        <div className='bg-main'>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <h1 className="fn-futura">FREQUENTLY ASKED QUESTIONS</h1>
                    <div className="mt-3">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            {
                                faq?.map((q, i) => {
                                    return (
                                        <Questions
                                            questionNum={q.no}
                                            question={q.q}
                                            answer={q.a}
                                            index={i}
                                            setCollapsed={setCollapsed}
                                            collapsed={collapsed}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq