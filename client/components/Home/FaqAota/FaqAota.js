import React,  { useEffect, useState } from 'react';

import styles from './FaqAota.module.css';
import QuestionsAns from './QuestionsAns';







const FaqAota = () => {


    const faq = [
        {
            no: 1,
            q: "What is Aliens on the ave?",
            a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
        },
        {
            no: 2,
            q: "How can I get access to the creative haven?",
            a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
        },
        {
            no: 3,
            q: "What plans are there for AOTA?",
            a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
        },
        {
            no: 4,
            q: "What are AOTA?",
            a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
        },
        {
            no: 5,
            q: "Will there ever be more Aliens added to the collection?",
            a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
        },
        {
            no: 6,
            q: "Do I own the rights to my AOTA?",
            a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
        }
    ];

    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {


    }, [collapsed]);







    return (
        <div className={styles.FaqAota}>
<div className="container pb-4 pt-4">
            <div className="row">
                <div className={`col-md-5 ${styles.FaqPrime}`}>
                    
                    <h1>FAQ AOTA</h1>
                    <h3>Prime AOTA NFT’s</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>

                    </div>


                    <div className="col-md-7">
                    {
                                faq?.map((q, i) => {
                                    return (
                                        <QuestionsAns
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
    );
};

export default FaqAota;