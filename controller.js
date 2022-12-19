

const constainer = document.querySelector('.container');
const cartBox = document.querySelector('.cart');

let listItem;

function addItemsToCart(){
    const cart= JSON.parse(localStorage.getItem('cart')  )
    const value =cart != undefined ?cart.length:  0 
    console.log(' cart', cart, value, cartBox)
    cartBox.innerHTML = value

}
addItemsToCart()

const   myFunction = function (evenvt){
    
const cart= JSON.parse(localStorage.getItem('cart')  )
let id = evenvt.target.dataset.id;

if( cart == undefined){
localStorage.setItem('cart', JSON.stringify([{id: id}]))
}else{
    cart.forEach(element => {
        if( Number(element.id) == id *1 ) {
alert('item added already')
            return
        }else{

            localStorage.setItem('cart', JSON.stringify([...cart, {id:id}]))
        }

    });
}
addItemsToCart()

console.log(cart)
    // for( let key in localSto
    //      ) {
    //     if (!localStorage.hasOwnProperty(key)) {
    //         localStorage.setItem("cart", id);
    //     }
    //     console.log(`${key}: ${localStorage.getItem(key)}`);
    // }

    // localStorage.key.map(e => {

    //     if(e === id){
    //         console.log(e, id);
    //         return
    //     }else{
    //         localStorage.setItem("cart", id);
    //         console.log(e, id);
    //     }
    // })
    
    
}



    const showCards = async function(){
        try{
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();

            
            console.log(data.products);

            let card = data.products.map((item, i) => {

                if(i>19) return;
                
                listItem  = {
                id: item.id,
                title: item.title,
                image: item.images[0],
                description: item.description,
                brand: item.brand,
                thumbnail: item.thumbnail,
                price: item.price,
            };

            const displayCard = `
            <div class = "card">
            <div class="card-header">
            <img src="${listItem.image}" alt="${listItem.image}" />
            </div>
            <div class="listItem-body">
                <span class="tag tag-teal">${listItem.brand}</span>
                <h4>${listItem.title}</h4>
                <p>${listItem.description}</p>
                <div class="user">
                    <img src="${listItem.thumbnail}" alt="${listItem.thumbnail}" />
                    <div class="user-info">
                        <h5>${listItem.price}</h5>
                        <small>${listItem.id}</small>
                        
                    </div>
                </div>
            </div>

            <button data-id = ${listItem.id} onclick="myFunction(event)" class="button" >Add To Cart</button>
            </div>
            </div>
            `;
            constainer.insertAdjacentHTML("afterbegin", displayCard);
        });

        }catch(error){
            alert(error);
        };

    }

    showCards();

    // localStorage.setItem("lastname", "Smith");
// localStorage.getItem("lastname");

// localStorage.clear();

//https://www.weatherapi.com/
// 893b7179fa314d0b90b155024221812