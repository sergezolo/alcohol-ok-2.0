import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="leftSide">
                <a href='/home'><h2>alcoholOK </h2></a>
            </div>
            <div className="centralSide">
                <div className="links">
                    <a href='/home'>HOME</a>
                    <a href='/create'>ADD A COCKTAIL</a>
                    <a href='/favorites'>FAVORITES</a>
                </div>
            </div>
            <div className="rightSide">
                <p>“I have taken more out of alcohol than alcohol has taken out of me.” - Winston Churchill</p>
                <p>“Too much of anything is bad, but too much good whiskey is barely enough.” - Mark Twain</p>
                <p>"Milk is for babies. When you grow up you have to drink beer." - Arnold Schwarzenegger</p>
            </div>   
        </div>
    )
}

export default Footer