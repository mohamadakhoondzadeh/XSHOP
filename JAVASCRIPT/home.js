const homes = null
const container = document.querySelector(".container")
const card = document.querySelector(".card")


fetchshop()
async function fetchshop() {
    const res = await fetch('https://fakestoreapi.com/products?limit=5')
    const shoppp = await res.json()
    console.log(shoppp);
    shopMarket(shoppp)
}
function shopMarket(data) {
    data.forEach((item)=>{
        const p = document.createElement("p")
        const img = document.createElement('img')
        img.src = item.image
        const p4 = document.createElement('p')
        p4.textContent = item.category
        const section = document.createElement('section')
        section.append(p4)
        p.textContent = item.description.substring(0, 85)
        
        section.append(img)
        section.append(p)
         img.classList.add('size')
        section.classList.add('box')
        section.classList.add('boxes')
        img.classList.add('size')
        const p3 = document.createElement('p')
        p3.textContent = `price: ${item.price}`
        section.append(p3)
        const a = document.createElement('a')
        a.setAttribute('href', '')
        a.textContent = 'shop now'
        a.style.textDecoration = 'none'
        section.append(a)
        section.classList.add('card-product')
        p.classList.add('text-color')
       
        card.append(section)
    })
}
    