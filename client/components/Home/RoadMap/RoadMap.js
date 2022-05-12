import React from 'react'
import Image from 'next/image';

function RoadMap() {
  return (
    <div className="container pt-4 pb-5">
      <div className="row">
        <div className="text-center">
          <Image
            src={'/images/Roadmap.png'}
            width={1000}
            height={1700}
          />
        </div>
      </div>
    </div>
  )
}

export default RoadMap