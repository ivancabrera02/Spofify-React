import React from 'react'
import Logo from '../images/spotify.png'

class Header extends React.Component{

    render(){

        return (
            <header className='Header'>
                <img src={Logo} alt='Logo' width='50px' height='50px' className='Header__logo'/>
                <h1 className='Header__title'>Spotify</h1>
                <span className='Header__span'></span>
                <a href='#' className='Header__text'>Premium</a>
                <a href='#' className='Header__text'>Asistencia</a>
                <a href='#' className='Header__text'>Descargar</a>
                <a href='#' className='Header__text'>|</a>
                <a href='#' className='Header__text'>Registrarse</a>
                <a href='#' className='Header__text Header-sesion'>Iniciar sesión</a>
            </header>
        );
    }
}

export default Header;