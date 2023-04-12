

const items = [
    {
        id: "1",
        name: "Laptop",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit augue ut tortor faucibus convallis.",
        amount: "$400",
        imageUrl: "/Z-Tech-Company/IMAGES/pic5.jpg"
    },
    {
        id: "2",
        name: "Fridge",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit augue ut tortor faucibus convallis.",
        amount: "$300",
        imageUrl: "/Z-Tech-Company/IMAGES/pic5.jpg"
    },
    {
        id: "3",
        name: "Smart tv",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit augue ut tortor faucibus convallis.",
        amount: "$200",
        imageUrl: "/Z-Tech-Company/IMAGES/comp1.jpg"
    },
    {
        id: "4",
        name: "Heater",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit augue ut tortor faucibus convallis.",
        amount: "$15",
        imageUrl: "/Z-Tech-Company/IMAGES/pic5.jpg"
    },
    {
        id: "5",
        name: "Woofer  ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit augue ut tortor faucibus convallis.",
        amount: "$50",
        imageUrl: "/Z-Tech-Company/IMAGES/comp1.jpg"
    }
]

let outlet = document.querySelector('.images')
items.forEach(item => {
    outlet.innerHTML += `
    <div class="products" >
    <img class="img" src="${item.imageUrl}" height="200px" width="300px">
      <h2 class="des"><u>${item.name}</u></h2>
    <p>   
      Amount:${item.amount} <br><br>
        ${item.description}
    </p>
    <input class="btn1" type="button" value="Add to Cart" id="${item.id}">
</div>
    `
})


const buttonAddToCart = document.querySelectorAll('.btn1')
console.log(buttonAddToCart);
buttonAddToCart.forEach(button => {
    button.addEventListener('click', () => {
        let id = button.id
        let clickedItem = items.find(item => {
            return item.id == id
        })
        let itemFromLocalStorage = JSON.parse(localStorage.getItem('items'))
        if(itemFromLocalStorage){
            localStorage.setItem('items', JSON.stringify([...itemFromLocalStorage, clickedItem]))
        }else{
            localStorage.setItem('items', JSON.stringify([clickedItem]))
        }
    })
})

const yourCart = document.querySelector('.cart').addEventListener('click', function () {
    location.href = "/Z-Tech-Company/CART/index2.html";
})j