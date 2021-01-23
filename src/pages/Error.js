import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <section className="error-page">
            <div className="cocktail-form">
                <h3>Wrong turn, sweetie! It's a dead end!</h3><br/><br/>
                
                <Link to='/' className='buttonPrim' type='button'>HOME</Link>
            </div>            
        </section>
    )
}

export default Error;