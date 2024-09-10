let bagItems;
onLoad()

function onLoad(){

  let bagStr=localStorage.getItem('bagItems')
  bagItems=bagStr?JSON.parse(bagStr):[];
  displayHomePageItems()
  displayBagIcon()
}

function addToBag(itemId)
{
   bagItems.push(itemId);
   localStorage.setItem('bagItems',JSON.stringify(bagItems));
   displayBagIcon()
}

function displayBagIcon()
{
  let bagElement=document.querySelector('.bag_item_count');
  if(bagItems.length>0)
  {
    bagElement.style.visibility='visible'
  bagElement.innerText=bagItems.length
  }
  else{
    bagElement.style.visibility='hidden'
  }
}

function formatRatingCount(count) {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k';
  }
  return count;
}

function displayHomePageItems(){
  let itemsContainer=document.querySelector('.items-container');
let innerHTML=''

items.forEach((item)=>{
  innerHTML+=`<div class="item-container">
          <img src=${item.image} alt="Item Image" class="item-image">
          <div class="rating">
            ${item.rating.stars} <i class="fa-solid fa-star" class="star-icon"></i> | ${formatRatingCount(item.rating.count)}
          </div>
          <div class="comapny-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          
        
        <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">( ${item.discount_percentage}% OFF)</span>

        </div>
        <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
      </div>`
})
if(!itemsContainer)
{
  return;
}

itemsContainer.innerHTML=innerHTML;
}