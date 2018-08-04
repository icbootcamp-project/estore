const header = {
  icons: [
    {
      iconId: "header-icon-1",
      iconName: "search icon",
      iconPosition: "far-left",
      iconPath: "./img/header/search-icon.png"
    },
    {
      iconId: "header-icon-2",
      iconName: "favourite icon",
      iconPosition: "left",
      iconPath: "./img/header/favourite-icon.png"
    },
    {
      iconId: "header-icon-3",
      iconName: "cart icon",
      iconPosition: "right",
      iconPath: "./img/header/cart-icon.png"
    },
    {
      iconId: "header-icon-4",
      iconName: "menu icon",
      iconPosition: "far-right",
      iconPath: "./img/header/res-menu-icon.png"
    }
  ],
  logo: {
    logoPath: "./img/header/estore.png"
  }
};

const categories = [
  {
    id: "category-1",
    name: "grocery"
  },
  {
    id: "category-2",
    name: "food"
  },
  {
    id: "category-3",
    name: "house care"
  },
  {
    id: "category-4",
    name: "sale"
  }
];

const footer = [];

const appData = [header, categories, footer];

export default appData;
