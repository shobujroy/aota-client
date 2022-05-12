import Image from 'next/image'
import React from 'react'

function SliderCard() {
  return (
    <>
      <Image
        src="/images/seiderImg.png"
        width={500}
        height={500}
        className={`img-fit rounded-3`}
      />
    </>
  )
}

export default SliderCard