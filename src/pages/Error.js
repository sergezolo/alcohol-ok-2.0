import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <section className="error-page">
            <div className="error-container">
                <h2>Wrong turn, baby! It's a dead end!</h2>
                <Link to='/' className='btn'>HOME</Link>
            </div>            
        </section>
    )
}

export default Error;