import React from 'react'
import SliderCard from './SliderCard'
import Carousel from 'react-grid-carousel';

function Header() {
  return (
    <div className='container-fluid pb-3'>
      <div className="row">
        <div className="col-md-12">
          <Carousel
            cols={3}
            rows={1}
            gap={5}
            loop={true}
            infinity={true}
            autoplay={5000}
            containerClassName='mt-4'
            hideArrow={false}
            responsiveLayout={[
              {
                breakpoint: 1200,
                cols: 3,
              },
              {
                breakpoint: 990,
                cols: 2
              }
            ]}
            mobileBreakpoint={670}
          >
            <Carousel.Item>
              <SliderCard />
            </Carousel.Item>
            <Carousel.Item>
              <SliderCard />
            </Carousel.Item>
            <Carousel.Item>
              <SliderCard />
            </Carousel.Item>
            <Carousel.Item>
              <SliderCard />
            </Carousel.Item>
            <Carousel.Item>
              <SliderCard />
            </Carousel.Item>
            <Carousel.Item>
              <SliderCard />
            </Carousel.Item>
            <Carousel.Item>
              <SliderCard />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Header