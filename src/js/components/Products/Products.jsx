import React , {Component , Fragment} from "react";
import { arrayOf, shape,func,bool,string } from "prop-types";
import { connect } from "react-redux";

import Categories from "../Categories";
import Filterproduct from "./FilterProduct";
import Item from "./Item";
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
};


export default connect(
    mapStateToProps,
    {
        loadProducts
    }
)(Products);
