// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { shape, string } from 'prop-types';

// ########## Import Components Here ##########

const FooterMenuItem = (props) => {
  const { footerMenuItem } = props;
  return (
    <Fragment>
      <div className="footer-menu-item">
        <h5 className="footer-menu-item-name">{footerMenuItem.footerMenuSubMenuName}</h5>
      </div>
    </Fragment>
  );
};

FooterMenuItem.propTypes = {
  footerMenuItem: shape({
    footerMenuSubMenuName: string.isRequired,
  }).isRequired,
};

export default FooterMenuItem;
