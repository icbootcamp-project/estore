import React , {Component , Fragment} from "react";

export default class Item extends Component {


    constructor(){
        super();
        this.state = {};

    }

    render(){
        const {name , price , brandLogo,premiumLogo , cat,subCat,img } = this.props.item;
        const dir = "../img/products/";
        return(
        <Fragment>
            <div id="Products-Item">
               <div className="Item">
                    <img className="product-img" src={dir+img} />
                    <div className="blur-sec" />
                    <div className="upper-info">
                        <div className="brand-info">
                            <img className="preminum-logo" src={dir+premiumLogo} />
                            <img className="brand-logo" src={dir+brandLogo} />
                        </div>
                        <div className="fvrt-btn">
                            <img src="../img/products/favourite-icon.png" />
                        </div>
                    </div>
                    <div className="Item-info">
                      <div className="des">
                        <div className="Item-name">{name}</div>
                        <div className="Item-cat">{cat} > {subCat}</div>
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