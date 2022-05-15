import React from 'react'
import Logo from '../images/spotify.png'
import Instagram from '../images/instagram.png'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='Footer__columnOne'>
                <img src={Logo} alt='Logo' width='50px' height='50px' className='FooterImg Header__logo'/>
                <h1 className='Header__title'>Spotify</h1>
            </div>
            <div className='Footer__columnTwo'>
                <p className='Footer__columnTwo-title'>EMPRESA</p>
                <p className='Footer__columnTwo-text'>Acerca de</p>
                <p className='Footer__columnTwo-text'>Empleo</p>
                <p className='Footer__columnTwo-text'>For the record</p>
            </div>
            <div className='Footer__columnThree'>
                <p className='Footer__columnTwo-title'>COMUNIDADES</p>
                <p className='Footer__columnTwo-text'>Para artistas</p>
                <p className='Footer__columnTwo-text'>Desarrolladores</p>
                <p className='Footer__columnTwo-text'>Publicidad</p>
                <p className='Footer__columnTwo-text'>Inversores</p>
                <p className='Footer__columnTwo-text'>Proveedores</p>
            </div>
            <div className='Footer__columnFour'>
            <p className='Footer__columnTwo-title'>ENLACES ÚTILES</p>
                <p className='Footer__columnTwo-text'>Asistencia</p>
                <p className='Footer__columnTwo-text'>Reproductor web</p>
                <p className='Footer__columnTwo-text'>App gratis para móvil</p>
            </div>
            <div className='Footer__columnFive'>
                <img src={Instagram} alt='LogoInstagram' height='40px' width='40px' className='FooterLogo'/>
                <img src={Twitter} alt='LogoTwitter' height='40px' width='40px' className='FooterLogo'/>
                <img src={Facebook} alt='LogoFacebook'height='40px' width='40px' className='FooterLogo'/>
            </div>
            
        </footer>
    );
}

export default Footer;