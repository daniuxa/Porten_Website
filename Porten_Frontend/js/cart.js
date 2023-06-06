const cartPage = document.querySelector('.cart_page');
let list = document.querySelector('.goods__block');
let watches = [ ];

window.addEventListener("load", checkCart);

function checkCart() {
    if (JSON.parse(localStorage.getItem("cart")).length) {
        cartPage.classList.add('cart_active');
    }
    else{
        cartPage.classList.remove('cart_active');
    }
}

//Docker
async function getData() {
	try {
	  const response = await fetch('http://localhost:8080/api/watches');
	  const data = await response.json();
	  
	  data.forEach(obj => {
		watches.push(obj);
	  });
  
	} catch (error) {
	  console.error('Error:', error);
	}
}

function AddToCard()
{
    const cards = document.querySelectorAll(".goods__item");
    cards.forEach(el=> {
    
        const btn = el.children[0].children[1];
        const title = el.getAttribute("data-name");
        const price = el.getAttribute("data-price");
        const img = el.childNodes[1].childNodes[5].attributes[0].value;
    
        btn.addEventListener("click" , () => {       
    
            
            let cart = JSON.parse(localStorage.getItem("cart")) || [];        
            const card = { title , price , img };
            const objectExists = cart.some(obj => obj.title === card.title);
           
            if (!objectExists) {
    
                cart.push(card);           
                localStorage.setItem("cart", JSON.stringify(cart));
    
            }           
    
            checkCart();
    
        })
    });
}

(async function initApp(){
	await getData();
    watches.forEach(value =>{
		console.log(value);
        let newDiv = document.createElement('div');
        newDiv.classList.add('goods__item');
        newDiv.setAttribute("data-price", value.price); 
        newDiv.setAttribute("data-name", value.name); 

        newDiv.innerHTML = `
		 <div class="goods__item__photo">
                                <div class="goods__bg"></div>
                                <div class="goods__window">
                                    Додати в кошик
                                </div>     
                                <img src="${value.img}" alt="">                                                       
                            </div>
                            <div class="goods__item__name">${value.name}</div>
                            <div class="goods__item__price">${value.price} грн. </div>`;
		list.appendChild(newDiv);
    });
    AddToCard();
})();










