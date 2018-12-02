// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { shape, string } from 'prop-types';

// ########## Import Components Here ##########
import FooterMenu from './FooterMenu';

const Footer = (props) => {
  function renderFooterMenu() {
    const { footer } = props;
    return footer.footerMenuItems.map((item) => <FooterMenu key={item.footerMenuId} footerMenu={item} />);
  }

  const { footer } = props;
  return (
    <Fragment>
      <div id="footer">
        <img className="footer-logo" src={footer.footerLogo.footerLogoLink} alt={footer.footerLogo.footerLogoAltText} />
        <div className="footer-menu-container">{renderFooterMenu()}</div>
        <div className="footer-disclaimer">{footer.footerDisclaimer.footerDisclaimerLiner}</div>
      </div>
    </Fragment>
  );
};

Footer.propTypes = {
  footer: shape({
    footerLogo: shape({
      footerLogoLink: string.isRequired,
      footerLogoAltText: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Footer;
