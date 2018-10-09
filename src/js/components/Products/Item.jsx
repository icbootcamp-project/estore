import React , {Component , Fragment} from "react";

export default class Item extends Component {


    constructor(){
        super();
        this.state = {};

    }

    render(){
        return(
        <Fragment>
            <div id="Products-Item">
               <div className="Item">
                    <img src="../img/products/pasta-noodles.jpg" />
                    <div className="blur-sec" />

                    <div className="Item-info">
                      <div className="des">
                        <div className="Item-name">Pasta</div>
                        <div className="Item-cat">Food > Pasta & Nodles</div>
                      </div>
                      <div className="other-info">
                        <div className="price-btn">PKR: 256</div>
                        <div className="add-btn">+</div>
                      </div>
                    </div>

               </div>
            </div>
        </Fragment>
            
        )
    }
};