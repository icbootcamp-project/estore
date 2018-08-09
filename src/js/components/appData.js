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

const footer = [];

const appData = [header, categories, subCategoriesGallery, footer];

export default appData;
