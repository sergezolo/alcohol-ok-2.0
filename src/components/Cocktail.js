import React from 'react';
import './Cocktail.css';

const CocktailCard = () => {
    return (
        <div className="cocktail">
            <div className="cocktail-image">
                <img src="https://www.liquor.com/thmb/2o3aZLVPhumyohtYUm0qcNnxgKI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Big-Red-Son_main_720x720-864f0c704f2c45cc8868fd69a4a324a3.jpg" alt=""/>
            </div>
            <div className="cocktail-name">
                <h3>Name</h3>
            </div>
        </div>
    )
}

export default CocktailCard;