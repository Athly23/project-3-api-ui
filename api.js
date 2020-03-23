const url = "https://rickandmortyapi.com/api/character/";

let gallery = document.querySelector(".characters");
let array = document.querySelector(".character-pics");
// let info = document.querySelector("p")
let previous = document.querySelector(".left")
// let currentImage 
let iterator = 0
let imageArray
let info = document.querySelector(".text-container")
let para1 = document.querySelector(".para-1")
let para2 = document.querySelector(".para-2")
let para3 = document.querySelector(".para-3")
let para4 = document.querySelector(".para-4")
let para5 = document.querySelector(".para-5")

    
    let fetchRes = fetch(url) 
    .then(res => res.json())
    .then(res => {
        imageArray = res.results
        return imageArray
    })
    
    imageArray=fetchRes 
    
    setTimeout(function(){
        array.setAttribute('src', imageArray[iterator].image) 
        para1.textContent = imageArray[iterator].name 
        para2.textContent = imageArray[iterator].status
        para3.textContent = imageArray[iterator].species
        para4.textContent = imageArray[iterator].gender
        

    }, 200)
    





let handleClickLeft = (e) => {
    e.preventDefault()
    iterator--
    if (iterator < 0) iterator = imageArray.length -1 
    array.setAttribute('src', imageArray[iterator].image)
    info.textContent = imageArray[iterator].name

    }

        previous.addEventListener("click", handleClickLeft)


let next = document.querySelector(".right")

let handleClickRight = (e) => {
    e.preventDefault()
    iterator++
    if (iterator > imageArray.length -1) iterator = 0;
    array.setAttribute('src', imageArray[iterator].image)
    para1.textContent = imageArray[iterator].name
    para2.textContent = imageArray[iterator].status
    para3.textContent = imageArray[iterator].species
    para4.textContent = imageArray[iterator].gender
    
    
    

}

    next.addEventListener("click", handleClickRight)








// let slideCount = array.length;

// let slideWidth = array.offsetWidth 
        
// let currentSlide = 1;

// function transitionSlide(){
//     if(currentSlide < gallery.length){
//       let delta = (-slideWidth * currentSlide);
//       gallery.style.transform = `translateX(${delta}px)`;
//       currentSlide += 1;
//     }
//     else {
//       gallery.style.transform = `translateX(0)`;
//       currentSlide = 1;
//     }
//   console.log("Called!")
//   }
//   setInterval(transitionSlide, 5000)
