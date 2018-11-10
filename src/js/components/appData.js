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
    isActive: false
  },
  {
    id: "category-4",
    name: "sale",
    isActive: true
  },
  {
    id: "category-5",
    name: "pet food",
    isActive: false
  },
  {
    id: "category-6",
    name: "garden",
    isActive: false
  },
  {
    id: "category-7",
    name: "pet food",
    isActive: false
  },
  {
    id: "category-8",
    name: "pet food",
    isActive: false
  },
  {
    id: "category-9",
    name: "pet food",
    isActive: false
  },
  {
    id: "category-10",
    name: "pet food",
    isActive: false
  }
];

const subCategoriesGallery = [
  {
    subCategoriesGalleryId: "subcategory-item-1",
    subCategoryName: "Oils & Ghee",
    subCategoryImage: "./img/subcategories-gallery/oils-ghee.jpg",
    isOnSale: true,
    link: "/products"
  },
  {
    subCategoriesGalleryId: "subcategory-item-2",
    subCategoryName: "Canned Items",
    subCategoryImage: "./img/subcategories-gallery/canned-items.jpg",
    isOnSale: true,
    link: "/products"
  },
  {
    subCategoriesGalleryId: "subcategory-item-3",
    subCategoryName: "Rice & Atta",
    subCategoryImage: "./img/subcategories-gallery/rice-atta.jpg",
    isOnSale: false,
    link: "/products"
  },
  {
    subCategoriesGalleryId: "subcategory-item-4",
    subCategoryName: "Home Baking",
    subCategoryImage: "./img/subcategories-gallery/home-baking.jpg",
    isOnSale: true,
    link: "/products"
  },
  {
    subCategoriesGalleryId: "subcategory-item-5",
    subCategoryName: "Pasta & Noodles",
    subCategoryImage: "./img/subcategories-gallery/pasta-noodles.jpg",
    isOnSale: false,
    link: "/products"
  },
  {
    subCategoriesGalleryId: "subcategory-item-6",
    subCategoryName: "Pickles",
    subCategoryImage: "./img/subcategories-gallery/pickles.jpg",
    isOnSale: true,
    link: "/products"
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

export const paymentFields = [
  {
    id: "payment-field-1",
    name: "Card name",
    width: "full",
    type: "text"
  },
  {
    id: "payment-field-2",
    name: "Card number",
    width: "full",
    type: "type"
  },
  {
    id: "payment-field-3",
    name: "MM",
    width: "onethird",
    type: "dropdown"
  },
  {
    id: "payment-field-4",
    name: "YY",
    width: "onethird",
    type: "dropdown"
  },
  {
    id: "payment-field-5",
    name: "",
    width: "onethird",
    type: "text"
  }
];

export const paymentTypes = [
  {
    id: "payment-type-1",
    name: "Jazz cash",
    src: "jazzcash.png",
    value: true
  },
  {
    id: "payment-type-2",
    name: "Cash on delivery",
    src: "cashondelivery.png",
    value: false
  }
];

export const deliveryFields = [
  {
    id: "delivery-fields-1",
    name: "First name",
    width: "full",
    type: "text"
  },
  {
    id: "delivery-fields-2",
    name: "Last name",
    width: "full",
    type: "text"
  },
  {
    id: "delivery-fields-3",
    name: "Email",
    width: "full",
    type: "email"
  },
  {
    id: "delivery-fields-4",
    name: "Phone",
    width: "full",
    type: "text"
  },
  {
    id: "delivery-fields-5",
    name: "Country",
    width: "full",
    type: "text"
  },
  {
    id: "delivery-fields-6",
    name: "State",
    width: "half",
    type: "text"
  },
  {
    id: "delivery-fields-7",
    name: "City",
    width: "half",
    type: "text"
  },
  {
    id: "delivery-fields-8",
    name: "Address",
    width: "full",
    type: "text"
  }
];

const appData = [header, categories, subCategoriesGallery, footer, paymentFields, paymentTypes, deliveryFields];

export default appData;
