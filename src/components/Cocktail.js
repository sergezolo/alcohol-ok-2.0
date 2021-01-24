import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Cocktail = (props) => {

 const {cocktails, history, match} = props;
     
console.log(props)

const cocktail = cocktails.find(cocktail => cocktail.id === +match.params.id)

    return (
        <div className="grid-container ">
            <div className="item1"><h2>{cocktail.name}</h2></div>
            <div className="item2"><img className="cocktail-img" src="https://www.liquor.com/thmb/9sxEP7r3KCRvz60d7T8tOJfTOew=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__01__25082750__Roman-Holiday-720x720-recipe-4c85f04bd8694fe0a7742cda5ecb421e.jpg"></img></div>
            <div className="item3">
                <div className="ingredients">
                    <h5>Ingredients:</h5>

                </div>
                <div className="instructions">
                    <h5>Instructions:</h5>

                </div>
            </div>
            <div className="item4">
                <p>dskjvnjlfdkngvfdjn dfk vjdf bjfd bhjf jfd vfd jfd gfd gbfd gdf vh dfhbv dfhv dfhv hdfv hfb lhdfv hfv dfv jdfv hfv
                    vdsfvfdkjvhbkdfjvn kfdvdf d vdf vmfd vfvjdvsdvds v sdvj dsvsd vsd;valuedscnsd sdb cmbsdc sd vs

                      sdhv hdc dkhsc khsd cvhjd vfvjdvsdvdsvsd
                      vcsd hd vjsd vljsd vljdfsd

                      sd cdh kvfd vfdvhf vhjr ff
                      sd cvfdshvhkd verkuy
                </p>
            </div>
            <Link to={'/cocktail'} className="buttonPr">Edit Cocktail</Link>
            <Link to={'/cocktail'} className="buttonPr">Delete Cocktail</Link><br/>
        </div>
    )
}

export default withRouter(Cocktail);