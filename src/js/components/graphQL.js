const users = [
  {
    id: "user-1",
    name: "Name Surname",
    phoneNumber: "phone",
    email: "email",
    password: "password",
    address: "address",
    jazzCash: "jazzCash-id",
    categories: ["cat-1", "cat-2"],
    orders: ["orders-1", "orders-2"],
    lastOrder: ["lastOrder-1", "lastOrder-2"],
    isActive: "true",
    createdAt: "timestamp",
    updatedAt: "timestamp"
  }
];

const categories = [
  {
    id: "cat-1",
    name: "Category Name",
    subCategory: ["subCat-1", "subCat-2"],
    createdAt: "timestamp",
    updatedAt: "timestamp"
  }
];

const subCategories = [
  {
    id: "subCat-1",
    name: "Sub Category Name",
    items: ["item-1", "item-2"],
    createdAt: "timestamp",
    updatedAt: "timestamp"
  }
];

const items = [
  {
    id: "item-1",
    name: "Item Name",
    stocks: ["stock-1", "stock-2"],
    reviews: ["review-1", "review-2"],
    likes: ["like-1", "like-2"],
    createdAt: "timestamp",
    updatedAt: "timestamp"
  }
];

const order = [
  {
    id: "order-1",
    stocks: ["stock-1", "stock-2"],
    lastOrder: ["lastOrder-1"],
    createdAt: "timestamp",
    updatedAt: "timestamp"
  }
];

const stock = [
  {
    id: "stock-1",
    items: ["item-1", "item-2"],
    orders: ["order-1", "order-2"],
    createdAt: "timestamp",
    updatedAt: "timestamp"
  }
];

export const appData = [categories, subCategories];