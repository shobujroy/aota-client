import React from 'react'
import Image from 'next/image';

function RoadMap() {
  return (
    <div id='road-map' className="bg-main">
      <div className="container pt-4 pb-5">
        <div className="row">
          <h1 className='text-start fn-futura mb-3'>Road Map</h1>
          <p className='fn-futura'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime incidunt, assumenda sunt quos soluta saepe vero, alias dignissimos libero voluptatum iusto commodi excepturi eaque necessitatibus. Soluta, non eligendi, suscipit nulla, dolore a sed veniam et quis minima provident. Voluptates itaque ab repudiandae. Cupiditate, aperiam ut! Eius incidunt sunt ab quos qui corrupti, dignissimos amet consequuntur ducimus soluta id quidem eligendi autem. Praesentium dolorum aliquid, provident placeat quia consectetur molestiae!
          </p>
          <div className="text-center">
            <Image
              src={'/images/Roadmap.png'}
              width={1000}
              height={1700}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadMap