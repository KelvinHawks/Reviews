const reviews = [
    {
        id: 1,
        name: "Susan smith",
        job: "web developer",
        img: "-5983457487568878119_121.jpg",
        text: "I am a graphic designer specialised in designing web pages and other services like making wedding cards",
    },
    {
        id: 2,
        name: "Harun bosco",
        job: "designer",
        img: "-5983457487568878112_121.jpg",
        text: "I am a web developer and designer specialised in designing web pages and other services like making wedding cards",
    },
    {
        id: 3,
        name: "George bull",
        job: "Audio specialist",
        img: "-5983457487568878113_121.jpg",
        text: "I am a car audio installer designer specialised in designing web pages and other services like making wedding cards",
    },
    {
        id: 4,
        name: "Erick johns",
        job: "graffiti drawer",
        img: "-5983457487568878119_121.jpg",
        text: "I am a graffiti drawer and designer specialised in designing web pages and other services like making wedding cards",
    },
]

const image = document.getElementById("person-img")
const author = document.getElementById("author")
const info = document.getElementById("info")
let job = document.getElementById("para")
const btns = document.querySelectorAll(".fa-solid")
const randomBtn = document.querySelector("#random-btn")


//starting item

let count = 0

window.addEventListener("DOMContentLoaded", function () {
    review()
})

btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const Style = e.currentTarget.classList
        if(Style.contains("next-btn")){
            count++
        }else{
            count--
        }
        if(count > reviews.length - 1){
            count = 0
        }else if(count < 0){
            count = reviews.length - 1
        }
        review()
    })
})

randomBtn.addEventListener("click", function(){
    count = getRandomNumber()
    review()
})

function review(){
    const item = reviews[count]
    image.src = item.img 
    author.textContent = item.name
    job.textContent = item.job 
    info.textContent = item.text 
}

function getRandomNumber(){
    return Math.floor(Math.random() * reviews.length)
}


