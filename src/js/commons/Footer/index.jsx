// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';

// ########## Import Components Here ##########
import FooterMenu from './FooterMenu';

const Footer = () => {
  const footer = {
    footerMenuItems: [
      {
        footerMenuId: 'footer-menu-1',
        footerMenuName: 'about',
        footerMenuLink: '/about',
        footerMenuSubMenuItems: [
          {
            footerMenuSubMenuId: 'footer-menu-submenu-1',
            footerMenuSubMenuName: 'item1',
            footerMenuSubMenuLink: '/item1',
          },
          {
            footerMenuSubMenuId: 'footer-menu-submenu-2',
            footerMenuSubMenuName: 'item2',
            footerMenuSubMenuLink: '/item2',
          },
          {
            footerMenuSubMenuId: 'footer-menu-submenu-3',
            footerMenuSubMenuName: 'item3',
            footerMenuSubMenuLink: '/item3',
          },
        ],
      },
      {
        footerMenuId: 'footer-menu-2',
        footerMenuName: 'company',
        footerMenuLink: '/company',
        footerMenuSubMenuItems: [
          {
            footerMenuSubMenuId: 'footer-menu-submenu-1',
            footerMenuSubMenuName: 'item1',
            footerMenuSubMenuLink: '/item1',
          },
          {
            footerMenuSubMenuId: 'footer-menu-submenu-2',
            footerMenuSubMenuName: 'item2',
            footerMenuSubMenuLink: '/item2',
          },
          {
            footerMenuSubMenuId: 'footer-menu-submenu-3',
            footerMenuSubMenuName: 'item3',
            footerMenuSubMenuLink: '/item3',
          },
        ],
      },
      {
        footerMenuId: 'footer-menu-3',
        footerMenuName: 'support',
        footerMenuLink: '/support',
        footerMenuSubMenuItems: [
          {
            footerMenuSubMenuId: 'footer-menu-submenu-1',
            footerMenuSubMenuName: 'item1',
            footerMenuSubMenuLink: '/item1',
          },
          {
            footerMenuSubMenuId: 'footer-menu-submenu-2',
            footerMenuSubMenuName: 'item2',
            footerMenuSubMenuLink: '/item2',
          },
          {
            footerMenuSubMenuId: 'footer-menu-submenu-3',
            footerMenuSubMenuName: 'item3',
            footerMenuSubMenuLink: '/item3',
          },
        ],
      },
    ],
    footerLogo: {
      footerLogoLink: './img/footer/EStore-white.png',
      footerLogoAltText: 'Estore logo white',
    },
    footerDisclaimer: {
      footerDisclaimerLiner: '© EStore. 2018 All Rights Reserved.',
    },
  };
  function renderFooterMenu() {
    return footer.footerMenuItems.map((item) => <FooterMenu key={item.footerMenuId} footerMenu={item} />);
  }

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

export default Footer;
