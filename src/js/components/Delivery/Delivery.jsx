import React, { Fragment } from "react";
import HeroTitle from "../HeroTitle/HeroTitle";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Skeleton from "react-loading-skeleton";

class SkeletonLoading extends React.Component {
  render() {
    return (
      <Fragment>
        <div id="Delivery">
          <HeroTitle name="Delivery" section="2" />
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
          </div>
        </div>
      </Fragment>
    );
  }
}

function showtextFields(Data) {
  const textFields = Data.map(data => {
    return (
      <TextField
        name={data.name}
        type={data.type}
        width={data.width}
        key={Math.random()}
      />
    );
  });

  return textFields;
}
class Delivery extends React.Component {
  componentDidMount() {
    this.props.getDeliveryData();
  }
  render() {
    return this.props.deliveryData.data.length
      ? <Fragment>
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
      : <SkeletonLoading />;
  }
}

function mapStateToProps({ deliveryData }) {
  return {
    deliveryData
  };
}

export default connect(mapStateToProps, {
  getDeliveryData: actions.getDeliveryData
})(Delivery);
