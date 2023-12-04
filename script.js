let add = document.getElementById("add")
let content = document.getElementById("content")
let input = document.getElementById("input")

let list = []

add.addEventListener("click", () => {
    list.push(input.value)
    console.log(list)
    call()
    input.value = ""
})

function call(){
    let para = document.createElement("p")
    para.innerText = input.value
    content.appendChild(para)
    para.addEventListener("click", () => {
        para.style.textDecoration = "line-through"
        remove()
    })
    para.addEventListener("dblclick", () => {
        content.removeChild(para)
        remove()
    })
}
function remove(){
    let arr = list.indexOf(input.value)
    if(index>-1){
        list.splice(index,1)
    }
}