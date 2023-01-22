const shops = null
const container = document.querySelector(".container")
const card = document.querySelector(".card")


fetchshop()
async function fetchshop() {
    const res = await fetch('https://fakestoreapi.com/products')
    const shoppp = await res.json()
    console.log(shoppp);
    shopMarket(shoppp)
}

 function shopMarket(data) {
    data.forEach((element)=>{
        const p = document.createElement("p")
        const img = document.createElement('img')
        img.src = element.image
        img.style.borderRadius =  'teal'
        p.textContent = element.category
        
        const section = document.createElement('section')
        section.append(p)
        section.append(img)
        img.classList.add('size')
        section.classList.add('box')
        section.classList.add('boxes')
        img.classList.add('size')
        section.classList.add('card-product')
        card.append(section)
        const p1 = document.createElement('p')
        // p1.textContent = element.description
        p1.classList.add('sizee')
       card.classList.add('row')
       section.classList.add('col')
        section.append(p1)
        const p2 = document.createElement('p')
        // p2.textContent = element.id
        section.append(p2)
        const p3 = document.createElement('p')
        // p3.textContent = ` price :${element.price}`
        // p3.style.backgroundColor = 'red'
        p3.style.padding = '1px'
        p3.style.borderRadius = '5px'
        p3.style.textAlign = 'center'
        section.append(p3)
        const a = document.createElement('a')
        a.setAttribute('href', '')
        a.textContent = "More"
        a.style.textDecoration = 'none'
        a.style.backgroundColor = 'green'
        a.style.color = 'azure'
        a.style.borderRadius = '5px'
       section.append(a)
      
    })
}




