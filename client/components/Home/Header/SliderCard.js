import Image from 'next/image'
import React from 'react'

function SliderCard() {
  return (
    <>
      <Image
        src="/images/seiderImg.png"
        width={444}
        height={444}
        className={`img-fit rounded-3`}
      />
    </>
  )
}

export default SliderCard