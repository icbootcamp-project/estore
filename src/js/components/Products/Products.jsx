import React , {Component , Fragment} from "react";
import { arrayOf, shape } from "prop-types";

import Categories from "../Categories";
import Filterproduct from "./FilterProduct";
import Item from "./Item";
export default class Products extends Component {

    static propTypes = {
        categories: arrayOf(
            shape()).isRequired
    }

    constructor(){
        super();
        this.state = {};

    }

    render(){
        const { categories } = this.props;
        return(
        <Fragment>
            <Categories categories={categories} />
            <Filterproduct />
            <div id="product-container">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </Fragment>
            
        )
    }



};