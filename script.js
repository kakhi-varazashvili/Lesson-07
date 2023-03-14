/*ლექცია #7 - დავალება #1 - button-ზე დაჭერის შემთხვევაში დამალე DIV ელემენტი*/

let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let div = document.getElementById("text")

btn1.addEventListener("click",function(){
    div.style.display = "none"
})
btn2.addEventListener("click",function(){
    div.style.display = "block"
})

/*ლექცია #7 - დავალება #2 - შექმენი შემდეგი სტრუქტურა JS-ის გამოყენებით და დაამატეთ DOM-ში
<div id="card">
<h2>Vaniko</h2>
<a href="#">go to profile</a>
</div> */

let body = document.querySelector("body")
let div2 = document.createElement("div")
let h2 = document.createElement("h2")
let a = document.createElement("a")


body.appendChild(div2)
div2.id = "card"
div2.appendChild(h2) 
h2.innerHTML = "Vaniko"
card.appendChild(a)
a.innerHTML = "Go to profile";
a.href = "#";


/*ლექცია #7 - დავალება #3 - აირჩიე წინა დავალებაში შექმნილი და დამატებული ელემენტი სელექთორის
გამოყენებით და შეუცვალე background-ის ფერი წითლად. */


div2.style.backgroundColor = "red"