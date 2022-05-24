const products = [
  { productId: 1, productName: "Товар 1", categoryId: 1 },
  { productId: 2, productName: "Товар 2", categoryId: 2 },
  { productId: 3, productName: "Товар 3", categoryId: 3 },
  { productId: 4, productName: "Товар 4", categoryId: 4 },
  { productId: 5, productName: "Товар 5", categoryId: 5 },
  { productId: 6, productName: "Товар 6", categoryId: 1 },
  { productId: 7, productName: "Товар 7", categoryId: 2 },
  { productId: 8, productName: "Товар 8", categoryId: 3 },
  { productId: 9, productName: "Товар 9", categoryId: 4 },
  { productId: 10, productName: "Товар 10", categoryId: 5 },
  { productId: 11, productName: "Товар 11", categoryId: 1 },
  { productId: 12, productName: "Товар 12", categoryId: 2 },
  { productId: 13, productName: "Товар 13", categoryId: 3 },
  { productId: 14, productName: "Товар 14", categoryId: 4 },
  { productId: 15, productName: "Товар 15", categoryId: 5 },
  { productId: 16, productName: "Товар 16", categoryId: 1 },
  { productId: 17, productName: "Товар 17", categoryId: 2 },
  { productId: 18, productName: "Товар 18", categoryId: 3 },
  { productId: 19, productName: "Товар 19", categoryId: 4 },
  { productId: 20, productName: "Товар 20", categoryId: 5 },
  { productId: 21, productName: "Товар 21", categoryId: 1 },
  { productId: 22, productName: "Товар 22", categoryId: 2 },
  { productId: 23, productName: "Товар 23", categoryId: 3 },
  { productId: 24, productName: "Товар 24", categoryId: 4 },
  { productId: 25, productName: "Товар 25", categoryId: 5 },
];

const categories = [
  { categoryId: 1, categoryName: "Футболки" },
  { categoryId: 2, categoryName: "Майки" },
  { categoryId: 3, categoryName: "Носки" },
  { categoryId: 4, categoryName: "Джинсы" },
  { categoryId: 5, categoryName: "Брюки" },
];

const productsElement = document.querySelector(".products");
const tabsTemplateList = document
  .querySelector("#tabs")
  .content.querySelector(".tabs__list");

const tabsTemplateItem = document
  .querySelector("#tabs")
  .content.querySelector(".tabs__item");
const tabsContentTemplateList = document
  .querySelector("#tabs-content")
  .content.querySelector(".tabs-content__list");

const tabsContentTemplateItem = document
  .querySelector("#tabs-content")
  .content.querySelector(".tabs-content__item");

const createTabs = () => {
  const tabsItemFragment = document.createDocumentFragment();

  categories.forEach((item) => {
    const tabsItem = tabsTemplateItem.cloneNode(true);
    tabsTemplateItem.remove();
    tabsItem.textContent = item.categoryName;
    tabsItem.id = item.categoryId;
    tabsItemFragment.appendChild(tabsItem);
  });

  tabsTemplateList.appendChild(tabsItemFragment);
  productsElement.appendChild(tabsTemplateList);
};

createTabs();

const createTabsContent = (id) => {
  const tabsContentItemFragment = document.createDocumentFragment();

  products.forEach((product) => {
    if (product.categoryId == id) {
      const tabsContentItem = tabsContentTemplateItem.cloneNode(true);
      tabsContentTemplateItem.remove();
      tabsContentItem.querySelector(".tabs-content__item-image").alt =
        product.productName;
      tabsContentItem.querySelector(".tabs-content__item-name").textContent =
        product.productName;
      tabsContentItem.id = product.categoryId;
      tabsContentItemFragment.appendChild(tabsContentItem);
    }
  });
  tabsContentTemplateList.appendChild(tabsContentItemFragment);
  productsElement.appendChild(tabsContentTemplateList);
};

const tabs = document.querySelectorAll(".tabs__item");
const tabsContent = document.querySelectorAll(".tabs-content__item");

createTabsContent(tabs[0].id);

const clearTab = () => {
  const tabsContent = document.getElementsByClassName("tabs-content__item");
  while (tabsContent.length > 0) {
    tabsContent[0].remove();
  }
};

const hideTab = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("tabs__item--current");
  });
};

tabs.forEach((tab) => {
  tabs[0].classList.add("tabs__item--current");
  tab.addEventListener("click", (evt) => {
    evt.preventDefault();
    hideTab();
    evt.target.classList.add("tabs__item--current");
    clearTab();
    createTabsContent(evt.target.id);
  });
});
