import React from 'react'

const ArticleTwo = () => {
    return (
        <article className='Article__Two'>
            <div className='Article__Two-columnOne'>
                <p className='Article__Two-columnOne-title'>SPOTIFY FREE</p>
                <h2 className='Article__Two-columnOne-h2'>Escuchar lo es todo</h2>
                <p className='Article__Two-columnOne-p'>Millones de canciones y pódcasts. No hace falta tarjeta de crédito.</p>
                <button className='Article__Two-columnOne-button'>DESCARGA SPOTIFY GRATIS</button>
            </div>
            <div className='Article__Two-columnTwo'>
                <p className='Article__Two-circle'></p>
                <p className='Article__Two-circleTwo'></p>
                <p className='Article__Two-circleThree'></p>
            </div>
        </article>
    );
}

export default ArticleTwo;