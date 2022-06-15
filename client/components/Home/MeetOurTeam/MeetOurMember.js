import React from 'react';
import styles from './MeetOurTeam.module.css';


import Image from 'next/image';
const MeetOurMember = (props) => {

    const {image , p, title} = props.member;
   

   
    return (
        <div> <div className={`card p-3 mb-4 ${styles.benefitsCard}`} style={{ width: '650px', border: '1px solid #fff' }}>
        <div className='shadow w-max p-1 pt-2'>
            <Image
                src={image}
                width={50}
                height={50}
            />
        </div>
        <h6 className='pt-2 pb-2'>{title}</h6>
        <p>{p}</p>
    </div>
        </div>
       
    );
};

export default MeetOurMember;