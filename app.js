let input = document.querySelectorAll(".one") ;
const copy = document.getElementById("copy") ;
let content = document.getElementById("content") ;
let upperletter = "ABCDEFGHIJKLMNOPQSXYZ"
let lowerletter = "abcdefghijklmnopqsxyz"
let number = "123456789" ;
let symbol = "!@$#$%^&*()_+-" ;
let list = [];
let numberLetter = document.getElementById("numletter") ;
console.log(numberLetter.value) ;
function splitthing(arg) {
for(i=0 ; i<arg.length   ; i++) {
    list.push(arg[i])
}

}

let btn = document.getElementById("li") ;

btn.addEventListener("click",() => {

    for(e of input) {
        if(e.checked) {
            if(e.id === "a") {
             splitthing(upperletter)
            }
            else if(e.id === "b") {
            splitthing(lowerletter)
            }
            else if(e.id === "c") {
                splitthing(number)
            }
            else if(e.id === "d") {
              splitthing(symbol)
            }
            else {
                content.innerText = '' ;
            }
           
        }
    }
    showRandomCode() ;
    list = []
}
)


function showRandomCode() {
    let nubContent = '' ;
    if(numberLetter.value <= 20 && numberLetter.value > 5){
     for(t=0 ; t < numberLetter.value ; t++ ) {
        let randNumb = Math.floor(Math.random() * list.length)
        nubContent += list[randNumb] ;
     }
    content.innerText = `${nubContent}` ;
    }
    else {
        alert("please enter a number between 6 and 20")
    }
}

let body = document.body
copy.addEventListener("click" , () => {
    const textarea = document.createElement("textarea") ;
    const password = content.innerText ;
    if(!password) {
        return
    }
    textarea.value = password ;
    body.append(textarea) ;
    textarea.select() ;
    document.execCommand('copy') ;
    textarea.remove() ;
})