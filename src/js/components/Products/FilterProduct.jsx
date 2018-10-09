import React , {Component , Fragment} from "react";

export default class FilterProduct extends Component {


    constructor(){
        super();
        this.state = {};

    }

    render(){
        return(
          <Fragment>
            <div id="filter-products">
              <div className="filter-sort">
                <span className="sort-by">Sort by:</span>
                <span className="price">price</span>
              </div>
              <div className="filter-box border">
                <div className="filter-arrow" />
              </div>
              <div className="filter-box border">
                <img src="../img/products/list-view.png" alt="" />
              </div>
              <div className="filter-box">
                <img src="../img/products/grid-view.png" alt="" />
              </div>
            </div>
          </Fragment> 
            
        )
    }
};