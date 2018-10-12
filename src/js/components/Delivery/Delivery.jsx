import React, { Fragment } from "react";
// import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import { func, arrayOf, shape, string } from "prop-types";

import HeroTitle from "../HeroTitle/HeroTitle";
import TextField from "../TextField/TextField";

import Button from "../Button/Button";
import * as actions from "../../actions";


const SkeletonLoading = () => (
  <Fragment>
    <div id="Delivery">
      {  /*  <HeroTitle name="Delivery" section="2" />
    </div>

    <div className="d-form">
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120
        }}
      >
        <Skeleton width={600} height={90} />
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120
        }}
      >
        <Skeleton width={600} height={90} />
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120
        }}
      >
        <Skeleton width={600} height={90} />
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120
        }}
      >
        <Skeleton width={600} height={90} />
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120
        }}
      >
        <Skeleton width={600} height={90} />
      </div>  */  }
    </div> 
  </Fragment>
);

function showtextFields(Data) {
  const textFields = Data.map(data => (
    <TextField
      name={data.name}
      type={data.type}
      width={data.width}
      key={Math.random()}
    />
  ));

  return textFields;
}
class Delivery extends React.Component {
  static propTypes = {
    getDeliveryData: func.isRequired,
    deliveryData: arrayOf(
      shape({
        name: string.isRequired,
        width: string.isRequired,
        type: string.isRequired
      })
    ).isRequired
  };

  componentDidMount() {
    this.props.getDeliveryData();
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
    getDeliveryData: actions.getDeliveryData
  }
)(Delivery);

