let outlet = document.querySelector('.outlet')

const items =JSON.parse(localStorage.getItem('items'))

items.forEach(item=>{
    // console.log(item);
    outlet.innerHTML +=`
        <div class="products" >
            <img class="img" src="${item.imageUrl}" height="200px" width="300px">
            <h2 class="des"><u>${item.name}</u></h2>
            <p>
                ${item.description}
            </p>
            <input class="btn2" type="button" value="Remove from Cart" id="${item.id}">
        </div>
    `
})

let removeBtn = document.querySelectorAll('.btn2')
removeBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
       let remainingItemsAfterRemove = items.filter(item=>{
        console.log(btn.id)
            return item.id != btn.id
        })
        localStorage.setItem('items', JSON.stringify(remainingItemsAfterRemove) )
        location.reload()
    })
})

