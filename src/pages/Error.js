import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <section className="error-page">
            <div className="cocktail-form">
                <h3>Wrong turn, baby! It's a dead end!</h3><br/><br/>
                
                <Link to='/' className='btn'>HOME</Link>
            </div>            
        </section>
    )
}

export default Error;