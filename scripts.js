const page = document.getElementById("page")
console.log(page)
const body = document.querySelector("body")
console.log(body)
const overButtom = this.document.createElement("button")
overButtom.classList.add("overButtom")
const a = document.createElement("a")
a.setAttribute("href","#texto")
a.classList.add("voltar")
a.textContent = "Voltar"

window.addEventListener("scrollend", function(event) {
  if(window.scrollY >1000){
    page.appendChild(a)
  }

  if(this.window.scrollY == 0){
    a.remove()
  }
  console.log(this.document.body.offsetHeight)
  console.log(this.window.scrollY)
})