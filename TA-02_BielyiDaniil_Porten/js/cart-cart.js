
const cartBlock = document.querySelector(".cart__block");
const cartStogare = JSON.parse(localStorage.getItem("cart") || "[]");

function draw() {
    if (cartStogare.length) {
    
        cartStogare.forEach(element => {
    
            const {title,price,img} = element;       
            const newCard = document.createElement("div");
            newCard.classList.add('cart__item');
            newCard.innerHTML = `<div class="cart__block_left"> <img class="cart__img" src="${img}" alt=""> </div> <div class="cart__block_right"> <h4 class="cart__title">${title}</h4> <p class="cart__price"> <span> ${price} </span> <span>грн</span> </p> <div class="btn_block"> <input class="btn plus" type="button" value="+"> <input class="btn minus" type="button" value="-"> </div> <p class="cart__item_total_count">Загальна кількість : <span>1</span> </p> <p class="cart__item_total_price">Загальна ціна : <span>${price}</span> </p> <div class="cart_item_delete_btn">Видалити з кошика</div> </div>`;
           
            cartBlock.appendChild(newCard);
    
        });
    }
}

draw();

const cartItem = document.querySelectorAll('.cart__item');
// console.log(cartItem);
if (cartItem.length) {

    cartItem.forEach(element => {

        let totalCount = 1;   

        element.addEventListener("click" , (item) => {
           
            let price = Number(item.currentTarget.children[1].children[1].children[0].innerHTML);
            let btn = item.target;
            let totalCountElement = item.currentTarget.children[1].children[3].children[0];  
            let totalPriceElement = item.currentTarget.children[1].children[4].children[0];  

            if (btn.classList.contains("btn")) {
              
                if (btn.classList.contains("plus")) {
                    totalCount++;                   
                }
                else{
                    totalCount--;         
                    if (totalCount<0) {
                        totalCount = 0;
                    }          
                }
            }

            totalCountElement.innerHTML = totalCount;
            totalPriceElement.innerHTML = totalCount*price;

        });      

    });

}


const deleteCardBnt = document.querySelectorAll(".cart_item_delete_btn");

if (deleteCardBnt.length > 0) {
    
    deleteCardBnt.forEach(item => {

        item.addEventListener("click" , () => {
                      
            const cartItem = item.closest('.cart__item');
            const cartBlock = item.closest('.cart__block_right');
            const cartBlockTitle = cartBlock.querySelector('.cart__title');
            const cartBlockTitleText = cartBlockTitle.textContent;
            console.log(cartBlockTitleText);

            const cart = JSON.parse(localStorage.getItem('cart'));

            // Шукаємо індекс об'єкта за полем title
            const indexToRemove = cart.findIndex(item => item.title === cartBlockTitleText);
          
            // Видаляємо об'єкт із масиву
            cart.splice(indexToRemove, 1);
          
            // Зберігаємо оновлений масив у localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            cartItem.remove();

        });

        

    });

}
