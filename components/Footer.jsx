import React from 'react';
import { AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 ECommerce Aplication All rights reserverd</p>
      <p className="icons">
      <Link href={`https://www.instagram.com/cristianf.cruzm/`}>
        <AiFillInstagram />
      </Link>
      <Link href={`https://www.linkedin.com/in/cristian-ferney-cruz-moreno-1b813a125/`}>
        <AiFillLinkedin />
      </Link>
        
      
      </p>
    </div>
  )
}

export default Footer