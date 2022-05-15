import React from 'react'
import imagen from '../images/photo.png'

const ArticleOne = () => {
    return (
        <article className='Article'>
            <div className='Article__columnOne'>
                <p className='Article__columnOne-title'>SPOTIFY PREMIUM</p>
                <h2 className='Article__columnOne-h2'>3 meses de premium gratis, ¡corre!</h2>
                <p className='Article__columnOne-p'>Disfruta de música sin anuncios, reproducción sin conexión
                y mucho más. Cancelas cuando quieras.</p>
                <button className='Article__columnOne-button'>3 MESES GRATIS</button>
                <p className='Artile__columOne-min'>Solo para el plan Individual. Después, 9,99 € al mes. Consulta los términos y condiciones.
                Oferta válida solo para quienes aún no hayan probado Premium. La oferta termina el 19 de mayo de 2022.</p>
            </div>
            <div className='Article__columnTwo'>
                <img src={imagen} width='380px' height='380px' alt='Image1' />
            </div>
        </article>
    );
}

export default ArticleOne;