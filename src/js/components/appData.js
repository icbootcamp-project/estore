const header = {
  icons: [
    {
      iconId: "header-icon-1",
      iconName: "search icon",
      iconPosition: "far-left",
      iconPath: "./img/header/search-icon.png",
      iconBadgeCount: 0
    },
    {
      iconId: "header-icon-2",
      iconName: "favourite icon",
      iconPosition: "left",
      iconPath: "./img/header/favourite-icon.png",
      iconBadgeCount: 0
    },
    {
      iconId: "header-icon-3",
      iconName: "cart icon",
      iconPosition: "right",
      iconPath: "./img/header/cart-icon.png",
      iconBadgeCount: 3
    },
    {
      iconId: "header-icon-4",
      iconName: "menu icon",
      iconPosition: "far-right",
      iconPath: "./img/header/res-menu-icon.png",
      iconBadgeCount: 0
    }
  ],
  logo: {
    logoPath: "./img/header/estore.png"
  }
};

const categories = [
  {
    id: "category-1",
    name: "grocery",
    isActive: false
  },
  {
    id: "category-2",
    name: "food",
    isActive: false
  },
  {
    id: "category-3",
    name: "house care",
    isActive: true
  },
  {
    id: "category-4",
    name: "sale",
    isActive: false
  }
];

const subCategoriesGallery = [
  {
    subCategoriesGalleryId: "subcategory-item-1",
    subCategoryName: "Oils & Ghee",
    subCategoryImage: "./img/subcategories-gallery/oils-ghee.jpg",
    isOnSale: true
  },
  {
    subCategoriesGalleryId: "subcategory-item-2",
    subCategoryName: "Canned Items",
    subCategoryImage: "./img/subcategories-gallery/canned-items.jpg",
    isOnSale: true
  },
  {
    subCategoriesGalleryId: "subcategory-item-3",
    subCategoryName: "Rice & Atta",
    subCategoryImage: "./img/subcategories-gallery/rice-atta.jpg",
    isOnSale: false
  },
  {
    subCategoriesGalleryId: "subcategory-item-4",
    subCategoryName: "Home Baking",
    subCategoryImage: "./img/subcategories-gallery/home-baking.jpg",
    isOnSale: true
  },
  {
    subCategoriesGalleryId: "subcategory-item-5",
    subCategoryName: "Pasta & Noodles",
    subCategoryImage: "./img/subcategories-gallery/pasta-noodles.jpg",
    isOnSale: false
  },
  {
    subCategoriesGalleryId: "subcategory-item-6",
    subCategoryName: "Pickles",
    subCategoryImage: "./img/subcategories-gallery/pickles.jpg",
    isOnSale: true
  }
];


const footer = {
  footerMenuItems: [
    {
      footerMenuId: "footer-menu-1",
      footerMenuName: "about",
      footerMenuLink: "/about",
      footerMenuSubMenuItems: [
        {
          footerMenuSubMenuId: "footer-menu-submenu-1",
          footerMenuSubMenuName: "item1",
          footerMenuSubMenuLink: "/item1"
        },
        {
          footerMenuSubMenuId: "footer-menu-submenu-2",
          footerMenuSubMenuName: "item2",
          footerMenuSubMenuLink: "/item2"
        },
        {
          footerMenuSubMenuId: "footer-menu-submenu-3",
          footerMenuSubMenuName: "item3",
          footerMenuSubMenuLink: "/item3"
        }
      ]
    },
    {
      footerMenuId: "footer-menu-2",
      footerMenuName: "company",
      footerMenuLink: "/company",
      footerMenuSubMenuItems: [
        {
          footerMenuSubMenuId: "footer-menu-submenu-1",
          footerMenuSubMenuName: "item1",
          footerMenuSubMenuLink: "/item1"
        },
        {
          footerMenuSubMenuId: "footer-menu-submenu-2",
          footerMenuSubMenuName: "item2",
          footerMenuSubMenuLink: "/item2"
        },
        {
          footerMenuSubMenuId: "footer-menu-submenu-3",
          footerMenuSubMenuName: "item3",
          footerMenuSubMenuLink: "/item3"
        }
      ]
    },
    {
      footerMenuId: "footer-menu-3",
      footerMenuName: "support",
      footerMenuLink: "/support",
      footerMenuSubMenuItems: [
        {
          footerMenuSubMenuId: "footer-menu-submenu-1",
          footerMenuSubMenuName: "item1",
          footerMenuSubMenuLink: "/item1"
        },
        {
          footerMenuSubMenuId: "footer-menu-submenu-2",
          footerMenuSubMenuName: "item2",
          footerMenuSubMenuLink: "/item2"
        },
        {
          footerMenuSubMenuId: "footer-menu-submenu-3",
          footerMenuSubMenuName: "item3",
          footerMenuSubMenuLink: "/item3"
        }
      ]
    }
  ],
  footerLogo: {
    footerLogoLink: "./img/footer/EStore-white.png",
    footerLogoAltText: "Estore logo white"
  },
  footerDisclaimer: {
    footerDisclaimerLiner: "© EStore. 2018 All Rights Reserved."
  }
};
const products = [
  {
    productId: "product-item-1",
    productName: "Cooking Oil",
    productImage: "./img/subcategories-gallery/oils-ghee.jpg",
    isOnSale: true
  },
  {
    productId: "product-item-2",
    productName: "Canned Items",
    productImage: "./img/subcategories-gallery/canned-items.jpg",
    isOnSale: true
  },
  {
    productId: "product-item-3",
    productName: "Wheat Flour",
    productImage: "./img/subcategories-gallery/rice-atta.jpg",
    isOnSale: false
  },
  {
    productId: "product-item-4",
    productName: "Home Baking",
    productImage: "./img/subcategories-gallery/home-baking.jpg",
    isOnSale: true
  },
  {
    productId: "product-item-5",
    productName: "Pasta",
    productImage: "./img/subcategories-gallery/pasta-noodles.jpg",
    isOnSale: false
  },
  {
    productId: "product-item-6",
    productName: "Pickles",
    productImage: "./img/subcategories-gallery/pickles.jpg",
    isOnSale: true
  }
];

const appData = [header, categories, subCategoriesGallery, footer, products];

export default appData;
