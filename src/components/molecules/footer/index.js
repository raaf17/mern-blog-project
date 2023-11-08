import React from 'react'
import './footer.scss'
import { IDiscord, IFacebook, IGithub, IInstagram, ITelegram, ITwitter, Logo } from '../../../assets'

const Icon = ({img}) => {
  return (
    <div className='icon-wrapper'>
      <img className='icon-medsos' src={img} alt='icon' />
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div>
          <img src={Logo} alt='logo' />
        </div>
        <div className='social-wrapper'>
          <Icon img={IFacebook}/>
          <Icon img={ITwitter}/>
          <Icon img={IInstagram}/>
          <Icon img={ITelegram}/>
          <Icon img={IDiscord}/>
          <Icon img={IGithub}/>
        </div>
      </div>
      <div className='copyright'>
        <p>Copyright</p>
      </div>
    </div>
  )
}

export default Footer