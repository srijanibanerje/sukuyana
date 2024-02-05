import React from 'react'

import com2 from '../Assets/c2.png'
import com3 from '../Assets/c3.png'
import com4 from '../Assets/c4.png'
import com5 from '../Assets/c5.png'
import com6 from '../Assets/c6.png'
import com7 from '../Assets/c7.png'
import com8 from '../Assets/trustwallet.png'
import com9 from '../Assets/c9.png'
import com10 from '../Assets/c10.png'
import'../Css/Partners.css'
function Partners() {
  return (
    <>
    <div className="marquee-wrapper">
                <div className="marquee">
                  <a href='https://bscscan.com/address/0x485f66f20f6732017345ff3437377ec84ea75039' rel="noreferrer" target='_blank'>
                    <img src={com2} width="auto"  height="90px" alt='noimg' /></a>
                    <a href='https://www.coingecko.com/'rel="noreferrer" target='_blank' >
                    <img src={com3} width="auto"  height="90px"alt='noimg' /></a>
                    <a href='https://pancakeswap.finance/swap' rel="noreferrer" target='_blank'>
                    <img src={com4} width="auto"  height="90px" alt='noimg'/></a>
                    <a href='https://pancakeswap.finance/swap' rel="noreferrer" target='_blank'>
                    <img src={com5}  width="auto"  height="90px"alt='noimg' />
                    </a>
                    <a href='https://coinsgem.com/token/0x485f66f20f6732017345ff3437377ec84ea75039'rel="noreferrer" target='_blank'>
                    <img src={com6}   width="auto"  height="90px" alt='noimg' />
                    </a>
                   
                    <a href='https://coinpaprika.com/coin/sna-sukuyana/' rel="noreferrer" target='_blank'>
                    <img src={com7}  width="auto"  height="90px" alt='noimg' /></a>
                    <a href='https://pancakeswap.finance/swap?outputCurrency=0x485F66f20F6732017345ff3437377EC84Ea75039'rel="noreferrer" target='_blank' >
                      <img src={com8} width="auto"  height="90px"alt='noimg'/></a>
                      <a href='https://poocoin.app/tokens/0x485f66f20f6732017345ff3437377ec84ea75039'rel="noreferrer" target='_blank' >
                      <img src={com9} width="auto"  height="90px"alt='noimg'/></a>  
                      <a href='https://coinmarketcap.com/'rel="noreferrer" target='_blank' >
                      <img src={com10} width="auto"  height="90px"alt='noimg'/></a>  
                    {/* <img src="https://placeimg.com/250/150/any" alt='noimg' />
                    <img src="https://placeimg.com/250/150/any" alt='noimg' />
                    <img src="https://placeimg.com/250/150/any" alt='noimg' />
                    <img src="https://placeimg.com/250/150/any" alt='noimg' />
                    <img src="https://placeimg.com/250/150/any" alt='noimg' />
                    <img src="https://placeimg.com/250/150/any" alt='noimg' /> */}
                    
                   
                </div>
            </div>
    </>
  )
}

export default Partners
