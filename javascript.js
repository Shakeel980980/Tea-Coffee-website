let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.cart-count');
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}


function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.menu');
  if (!itemsContainerElement) {
    return;
  }
  let innerContant='';
    items_menus.forEach(item=>{
      innerContant += `
  <div class="mene-border">
  <div class="item">
   <img src="${item.item_img}" alt="img">
   <h3 class="name">${item.name}</h3>
   <p class="text">Original_price <u style="color:yellow"> Rs: ${item.original_price}</u></p>
   <p class="price">Current Price<u style="color:yellow">  Rs: ${item.current_price}</u></p>
   <button class="contant-bnt-order" onclick="addToBag(${item.id})">${item.btn}</button>
  </div>
  </div>`;
  });
  menu.innerHTML = innerContant;
}








