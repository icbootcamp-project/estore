import React, { Fragment } from "react";
import { connect } from "react-redux";
import { func, arrayOf, shape, string } from "prop-types";

import HeroTitle from "../Common/HeroTitle";
import TextField from "../Common/TextField";

import Button from "../Common/Button";
import * as actions from "./actions";
import SkeletonLoading from "./components/SkeletonLoading";

function showtextFields(Data) {
  return Data.map(data => (
    <TextField
      name={data.name}
      type={data.type}
      width={data.width}
      key={Math.random()}
    />
  ));
}
class Delivery extends React.Component {


  static propTypes = {
    getDeliveryDataAttempt: func.isRequired,
    getDeliveryDataSuccess: func.isRequired,
    getDeliveryDataFail: func.isRequired,
    deliveryData: arrayOf(
      shape({
        name: string.isRequired,
        width: string.isRequired,
        type: string.isRequired
      })
    ).isRequired
  };

  componentDidMount() {
    this.props.getDeliveryDataAttempt();
    this.props.getDeliveryDataSuccess();
    this.props.getDeliveryDataFail();
  }
  render() {
    return this.props.deliveryData.data.length ? (
      <Fragment>
        <div id="Delivery">
          <HeroTitle name="Delivery" section="2" />

          <div className="d-form">
            <form>
              {showtextFields(this.props.deliveryData.data)}
              <Button value="Next step" arrow="true" />
            </form>
          </div>
        </div>
      </Fragment>
    ) : (
      <SkeletonLoading />
    );
  }
}

function mapStateToProps({ deliveryData }) {
  return {
    deliveryData
  };
}

export default connect(
  mapStateToProps,
  {
    getDeliveryDataAttempt:actions.getDeliveryDataAttempt,
    getDeliveryDataSuccess: actions.getDeliveryDataSuccess,
    getDeliveryDataFail:actions.getDeliveryDataFail

  }
)(Delivery);
