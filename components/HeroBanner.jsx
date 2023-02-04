import React from 'react'
import Link from "next/link";
import { Button } from '../components'

import { urlFor } from '.././lib/client'


const HeroBanner = ({heroBanner:{smallText, midText, largeText1, image, product, buttonText, desc}}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <div className='left-section'>
        <p className='beats-solo'>{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <div>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <div className='middle-section'>
        <img src={urlFor(image)} alt="barriles" className='hero-banner-image' />
        </div>
        <div className='right-section'>
        <div className='desc'>
            <h5>Adquiere el tuyo</h5>
            <p>{desc}</p>
          </div>
        </div>
        </div>
        {/*<Link href='/category/ID'>
        <Button type='button'>Button TEXT personalizado</Button>
  </Link>*/}

      </div>
    </div>
  )
}

export default HeroBanner