import React from 'react'
import Carousel from 'react-grid-carousel'
import HotCollectionCard from './HotCollectionCard';

function HotCollection() {
  return (
    <div className="container pt-3 pb-5">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-start">Hot Collection</h2>
          <Carousel
            cols={5}
            rows={1}
            gap={10}
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
              <HotCollectionCard />
            </Carousel.Item>
            <Carousel.Item>
              <HotCollectionCard />
            </Carousel.Item>
            <Carousel.Item>
              <HotCollectionCard />
            </Carousel.Item>
            <Carousel.Item>
              <HotCollectionCard />
            </Carousel.Item>
            <Carousel.Item>
              <HotCollectionCard />
            </Carousel.Item>
            <Carousel.Item>
              <HotCollectionCard />
            </Carousel.Item>
            <Carousel.Item>
              <HotCollectionCard />
            </Carousel.Item>
            <Carousel.Item>
              <HotCollectionCard />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default HotCollection