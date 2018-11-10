// ########## Import Components Here ##########
import appData from "../components/appData";
import ProductItems from "../components/Products/data";
import cartData from "../components/Cart/cartData";

export function headerResponse() {
  return appData[0];
}

export function categoriesResponse() {
  return appData[1];
}

export function subCategoriesGalleryResponse() {
  return appData[2];
}

export function footerResponse() {
  return appData[3];
}

export function deliveryDataApi() {
  return appData[6];
}
export function productsResponse() {
  return ProductItems;
}

export function cartDataResponse() {
  return cartData
}
