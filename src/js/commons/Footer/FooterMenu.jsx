// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { arrayOf, shape, string } from 'prop-types';

// ########## Import Components Here ##########
import FooterMenuItem from './FooterMenuItem';

const FooterMenu = (props) => {
  function renderFooterMenuItems() {
    const { footerMenu } = props;
    return footerMenu.footerMenuSubMenuItems.map((item) => (
      <FooterMenuItem key={item.footerMenuSubMenuId} footerMenuItem={item} />
    ));
  }

  const { footerMenu } = props;
  return (
    <Fragment>
      <div className="footer-menu-column">
        <h5 className="footer-menu">{footerMenu.footerMenuName}</h5>
        <div>{renderFooterMenuItems()}</div>
      </div>
    </Fragment>
  );
};

FooterMenu.propTypes = {
  footerMenu: shape({
    footerMenuSubMenuItems: arrayOf(
      shape({
        footerMenuSubMenuId: string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default FooterMenu;
