import React , {Component , Fragment} from "react";
import {string  , number,shape} from "prop-types";

export default class Item extends Component {

    static propTypes = {
        item:shape({
            name:string.isRequired,
            price:number.isRequired,
            img:string.isRequired,
            brandLogo:string.isRequired,
            premiumLogo:string.isRequired,
            subCat:string.isRequired,
            cat:string.isRequired   
        }).isRequired
    }

    constructor(){
        super();
        this.state = {};

    }

    render(){
        const {name , price , brandLogo,premiumLogo , cat,subCat,img } = this.props.item;
        const dir = "../img/products/";
        const subCategory = `${cat} +  ">" + ${subCat}` ;
        return(
          <Fragment>
            <div id="Products-Item">
              <div className="Item">
                <img className="product-img" src={dir+img} alt="Item" />
                <div className="blur-sec" />
                <div className="upper-info">
                  <div className="brand-info">
                    <img className="preminum-logo" src={dir+premiumLogo} alt="Premiuim" />
                    <img className="brand-logo" src={dir+brandLogo} alt="brand" />
                  </div>
                  <div className="fvrt-btn">
                    <img src="../img/products/favourite-icon.png" alt="fav" />
                  </div>
                </div>
                <div className="Item-info">
                  <div className="des">
                    <div className="Item-name">{name}</div>
                    <div className="Item-cat">{subCategory}</div>
                  </div>
                  <div className="other-info">
                    <div className="price-btn">PKR: {price}</div>
                    <div className="add-btn">+</div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
            
        )
    }
};