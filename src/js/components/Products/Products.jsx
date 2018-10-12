import React , {Component , Fragment} from "react";
import { arrayOf, shape } from "prop-types";

import Categories from "../Categories";
import Filterproduct from "./FilterProduct";
import Item from "./Item";
import ProductItmes from "./data";

export default class Products extends Component {

    static propTypes = {
        categories: arrayOf(
            shape()).isRequired
    }

    constructor(){
        super();
        this.state = {};

    }
    renderItems(){
        return ProductItmes.map(
            (item) => <Item item={item} />
            
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