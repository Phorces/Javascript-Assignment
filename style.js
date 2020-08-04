function getDate (){
    let body = document.getElementById("mainBody")

let p = document.createElement("p")
p.textContent = Date()
body.appendChild(p)
}