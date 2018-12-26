// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
// import { shape, arrayOf, string } from 'prop-types';

// ########## Import Components Here ##########

const Header = () => {
  // const { header } = props;
  const header = {
    icons: [
      {
        iconId: 'header-icon-1',
        iconName: 'search icon',
        iconPosition: 'far-left',
        iconPath: './img/header/search-icon.png',
        iconBadgeCount: 0,
      },
      {
        iconId: 'header-icon-2',
        iconName: 'favourite icon',
        iconPosition: 'left',
        iconPath: './img/header/favourite-icon.png',
        iconBadgeCount: 0,
      },
      {
        iconId: 'header-icon-3',
        iconName: 'cart icon',
        iconPosition: 'right',
        iconPath: './img/header/cart-icon.png',
        iconBadgeCount: 3,
      },
      {
        iconId: 'header-icon-4',
        iconName: 'menu icon',
        iconPosition: 'far-right',
        iconPath: './img/header/res-menu-icon.png',
        iconBadgeCount: 0,
      },
    ],
    logo: {
      logoPath: './img/header/estore.png',
    },
  };

  return (
    <Fragment>
      <div id="header">
        <div className="search-icon">
          <img src={header.icons[0].iconPath} alt="search icon" />
        </div>
        <div className="favourite-icon">
          <img src={header.icons[1].iconPath} alt="favourite icon" />
        </div>
        <div className="logo">
          <img src={header.logo.logoPath} alt="" />
        </div>
        <div className="cart-icon">
          <div className="badge-circle">{header.icons[2].iconBadgeCount}</div>
          <img src={header.icons[2].iconPath} alt="cart icon" />
        </div>
        <div className="res-menu-icon">
          <img src={header.icons[3].iconPath} alt="res menu icon" />
        </div>
      </div>
    </Fragment>
  );
};

// Header.propTypes = {
//   header: shape({
//     logo: shape({
//       logoPath: string.isRequired,
//     }).isRequired,
//     icons: arrayOf(
//       shape({
//         iconPath: string.isRequired,
//       }).isRequired
//     ).isRequired,
//   }).isRequired,
// };

export default Header;
