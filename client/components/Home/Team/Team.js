import React from 'react'
import MemberCard from './MemberCard';
import styles from './Team.module.css';

function Team() {
    return (
        <div id='team' className='bg-main'>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <h1 className="text-start fn-futura">Team</h1>
                    <p className='fn-futura'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor voluptates repellendus temporibus dignissimos non assumenda provident quam nesciunt maiores delectus ratione accusantium suscipit harum, eius, officia mollitia dolorum porro explicabo? Sunt laboriosam magnam optio praesentium possimus, laborum quam eius odio?</p>
                    <div className="d-flex flex-wrap justify-content-center pt-5">
                        <MemberCard />
                        <MemberCard />
                    </div>
                    <div className="d-flex flex-wrap justify-content-evenly">
                        <MemberCard />
                        <MemberCard />
                        <MemberCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team