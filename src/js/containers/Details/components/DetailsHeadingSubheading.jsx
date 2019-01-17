import React, { Fragment } from 'react';

// import PriceButton from './PriceButton';
import Button from '../../../commons/Button';
// THIS IS THE MOCK DATA GIVEN SO THAT IT COULD BE SENT THROUGH PROPS
const data = { heading: 'Pasta', subheading: 'FOOD > PASTA & NOODLES' };
const { heading, subheading } = data;
// ////////////////////////////////////////////////////////////
const DetailsHeadingSubheading = () => (
  <Fragment>
    <div className="details-wrapper-div">
      <div style={{ margin: 'auto 0' }}>
        <div className="details-text-portion-heading">{heading}</div>
        <div className="details-text-portion-subheading">{subheading}</div>
      </div>
      <div className="details-rate-flag-portion">
        <div className="details">
          <Button value="PKR: 250" arrow="" style={{ height: '45px', lineHeight: '45px', fontSize: '1em' }} />
        </div>
        <div className="clear" />
      </div>
    </div>
  </Fragment>
);

export default DetailsHeadingSubheading;
