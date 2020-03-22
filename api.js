const url = "https://rickandmortyapi.com/api/character/";

let gallery = document.querySelector(".characters");
let array = document.querySelector(".character-pics");
let info = document.querySelector("p")
let previous = document.querySelector(".left")

let handleClickLeft = (e) => {
    e.preventDefault()
    fetch(url)
        .then(res => res.json())
        .then(res => {  
           console.log("yay", res)
            array.setAttribute('src', res.results[0].image)
            
        })

        .catch(err => console.log("oops", err));

    }

        previous.addEventListener("click", handleClickLeft)


let next = document.querySelector(".right")

let handleClickRight = (e) => {
    e.preventDefault()
    fetch(url)
        .then(res => res.json())
        .then(res => {  
        console.log("yay", res)
        array.setAttribute('src', res.results[0].image)
    
})

    .catch(err => console.log("oops", err));

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
