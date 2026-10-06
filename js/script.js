// const heading = document.getElementById("heading")
// const container = document.getElementsByClassName("container")
// console.log(container)
// heading.style.color = "red"
// heading.style.backgroundColor = "black"
// for(let i = 0 ; i<container.length;i++){
//     container[i].style.color = "red"
// }

// const heading = document.querySelector("#heading")
// heading.style.color = "red"

// const container = document.querySelectorAll(".container")
// console.log(container)

// container.forEach((item)=>{
//     item.style.color = "red"
// })

// const heading = document.querySelector("#heading")
// // heading.textContent = "<h1>this is the text came from the js</h1>"
// heading.innerHTML = "<h1>hello this is inner html text </h1>"


// const outer = document.querySelector("#outer")
// const inner = document.createElement("div")
// console.log(inner)
// inner.setAttribute("id","inner")
// inner.innerHTML = "<h1>inner</h1>"
// outer.appendChild(inner)


// const text = document.querySelector("#text")
// const btn = document.querySelector("#btn")

// btn.addEventListener("click",()=>{
//     text.textContent = "this is after click"
// })


// const dark = document.querySelector("#dark")
// const light = document.querySelector("#light")
// dark.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "black"
// })


// const username = document.getElementById("username")
// const output = document.querySelector("#output")
// const btn = document.querySelector("#btn")
// // console.log(name)
// btn.addEventListener("click", (e) => {
//     e.preventDefault()
//     const inputName = username.value
//     output.textContent = inputName
// })

const fetchData = async ()=>{
    const output = document.querySelector("#output")
    const response =await fetch("https://dummyjson.com/products")
    const data =await response.json()
    const products = data.products
    // console.log(products[0].title)
    products.forEach((product)=>{
        output.textContent += product.title
    })
}
fetchData()






