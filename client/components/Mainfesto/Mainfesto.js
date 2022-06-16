import React from 'react';
import Image from 'next/image';
import styles from './Mainfesto.module.css';

const Mainfesto = () => {
    return (
       
            <div  className="bg-secondary">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className={styles.imageWrapper}>
                            <Image
                                src={'/images/manifesto2.png'}
                                width={300}
                                height={400}
                                className={`img-fit img-fluid ${styles.image}`}
                            />
                        </div>
                    </div>
                    <div className={`col-md-6 col-sm-12 flex-column d-flex justify-content-center ${styles.AboutText}`}>
                        <h6 className='text-primary'>Manifesto</h6>
                        <h1>The Dawn of a New Era</h1>
                        <p>To a life full of your wildesrt dreams coming true. Creating the Unimagianable &amp; taking the Road less traveled. Deep into the Cosmos. down the rabbit hole we go. This is for the Thinkers. artist. misfits, Degens. Sanding Out’s Starting To feel a lot like Home.</p>
                        <p>Step into your world. A world of wonder &amp; no Limitations. Leave your Insecurities at the Door, You wont’t need them here. If we grow, you grow, we go together welcome to the creative Haven.</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Mainfesto;