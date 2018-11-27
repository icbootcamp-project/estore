<<<<<<< HEAD
import React, { Component, Fragment } from "react";
// import { arrayOf, shape } from "prop-types";
=======
import React , {Component , Fragment} from "react";
import { arrayOf, shape,func,bool,string } from "prop-types";
import { connect } from "react-redux";

>>>>>>> 562046f5103cf0a60ee53bb6ed6e24ad3cd75646

// import Categories from "../Categories";
import Filterproduct from "./FilterProduct";
import Item from "./Item";
<<<<<<< HEAD
import ProductItems from "./data";

export default class Products extends Component {

  // static propTypes = {
  //   categories: arrayOf(shape({})).isRequired
  // }

  renderItems = () => (
    ProductItems.map((item) => <Item key={item.id} item={item} />)
  )

  render() {
    // const { categories } = this.props;
    return (
      <Fragment>
        {/* <Categories categories={categories} /> */}
        <Filterproduct />
        <div id="product-container">
          {this.renderItems()}
        </div>
      </Fragment>
    )
  }
=======
import { loadProducts } from '../../actions';

class Products extends Component {

    static propTypes = {
        categories: arrayOf(
            shape()).isRequired,
        loadProducts:func.isRequired,
        productsReducer:shape({
            isLoading:bool.isRequired,
            err:string,
            data:arrayOf(shape()).isRequired
        }).isRequired
    }
    componentDidMount(){
        this.props.loadProducts();
    }

    renderItems(){
        const ProductItmes = this.props.productsReducer.data;
        return ProductItmes.map(
            (item) => <Item item={item} key={item.id} />
            
        )
    }
    

    render(){
        const { categories } = this.props;
        return(
          <Fragment>
            <Categories categories={categories} />
            <Filterproduct />
            <div id="product-container">
              {this.renderItems()}
            </div>
          </Fragment>
            
        )
    }

};
function mapStateToProps({productsReducer}){
    return {
        productsReducer
    }
>>>>>>> 562046f5103cf0a60ee53bb6ed6e24ad3cd75646
};


export default connect(
    mapStateToProps,
    {
        loadProducts
    }
)(Products);