import Image from 'next/image'
import React from 'react'
import styles from './About.module.css';

function About() {
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <div className={`col-md-5 ${ styles.aboutWrapper }`}>
          <div className="pb-3">
            <Image
              src={'/images/About-Us.png'}
              width={300}
              height={300}
              className="img-fit rounded-circle"
            />
          </div>

          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida non purus, vitae porttitor velit tincidunt pretium, penatibus tristique. Lectus dictum hendrerit augue vitae diam lacus turpis lorem.
          </p>

          <h1>Lorem ipsum dolr</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida non purus, vitae porttitor velit tincidunt pretium, penatibus tristique. Lectus dictum hendrerit augue vitae diam lacus turpis lorem.
          </p>
        </div>
        <div className={`col-md-7 ${ styles.aboutWrapper }`}>
          <h1>Idea</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio labore quibusdam ad aut reprehenderit earum veniam nobis, at facere perspiciatis doloribus, est facilis pariatur aliquid fugiat ab eos nisi tenetur? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida non purus, vitae porttitor velit tincidunt pretium, penatibus tristique. Lectus dictum hendrerit augue vitae diam lacus turpis lorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quas quis exercitationem odio, enim minima quos voluptates maxime totam quibusdam.
          </p>

          <h1>Background</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio labore quibusdam ad aut reprehenderit earum veniam nobis, at facere perspiciatis doloribus, est facilis pariatur aliquid fugiat ab eos nisi tenetur? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida non purus, vitae porttitor velit tincidunt pretium, penatibus tristique. Lectus dictum hendrerit augue vitae diam lacus turpis lorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quas quis exercitationem odio, enim minima quos voluptates maxime totam quibusdam.
          </p>

          <h1>Consecteture Adipiscing</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio labore quibusdam ad aut reprehenderit earum veniam nobis, at facere perspiciatis doloribus, est facilis pariatur aliquid fugiat ab eos nisi tenetur? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida non purus, vitae porttitor velit tincidunt pretium, penatibus tristique. Lectus dictum hendrerit augue vitae diam lacus turpis lorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quas quis exercitationem odio, enim minima quos voluptates maxime totam quibusdam.
          </p>

        </div>
      </div>
    </div>
  )
}

export default About