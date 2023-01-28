import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsFillEmojiFrownFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Cancell = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">
          <BsFillEmojiFrownFill />
        </p>
        <h2>Algo salio mal en tu orden</h2>
        <p className="email-msg">Por favor vuelve a intentar realizar tu pedido.</p>
        <p className="description">
          Si tienes alguna Duda no dudes en contactarnos, email <br/>
          <a className="email" href="mailto:cristianf.cruzm@gmail.com">
             cristianf.cruzm@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continuar Comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cancell