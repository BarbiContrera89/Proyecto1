import React from 'react'
import BtnQuote from './BtnQuote'

const QuotesBox = ({ quoteRandom, handleClick, colorRandom, classNameCard }) => {

    const objStyle = {
        color: colorRandom
    }

    const objStyleBtn = {
        backgroundColor: colorRandom
    }

    return (
        <article className={classNameCard} style={objStyle}>
            <i className="card__icon fa-solid fa-quote-left"></i>
            <p className='card__quote'>{quoteRandom.quote}</p>
            <h1 className='card__author'>{quoteRandom.author}</h1>
            <BtnQuote
                ObjStyleBtn={objStyleBtn}
                handleClick={handleClick}

            />
        </article>
    )
}

export default QuotesBox