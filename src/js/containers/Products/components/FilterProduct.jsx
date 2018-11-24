import React , {Component , Fragment} from "react";

export default class FilterProduct extends Component {


    constructor(){
        super();
        this.state = {
          display: false
        };
        this.toggleFilter = this.toggleFilter.bind(this);
    }
    toggleFilter(){
      const { display } = this.state;
      this.setState({
        display:!display
      })

    }

    render(){
      // const { display } = this.state;
      // let status;
      //  if(display){
      //    status = "show";
      //  }
      //  else{
      //    status = "hide";
      //  }
        return(
          <Fragment>
            <div id="filter-products">
              <div className="filter">
                <div className="filter-sort">
                  <span className="sort-by">Sort by:</span>
                  <span className="price">price</span>
                </div>
                <div 
                  className="filter-box border" 
                  role="button" 
                  onKeyPress={this.toggleFilter} 
                  onClick={this.toggleFilter} 
                  tabIndex={0} 
                >
                  <div className="filter-arrow" />
                </div>
                <div className="filter-box border">
                  <img src="../img/products/list-view.png" alt="" />
                </div>
                <div className="filter-box">
                  <img src="../img/products/grid-view.png" alt="" />
                </div>
              </div>
              {/* <div id="filter-options" className={status}>
                Filter Options under working...!
              </div> */}
            </div>
            
          </Fragment> 
            
        )
    }
};