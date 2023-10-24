
// document.querySelector("button").addEventListener("click" , handleClick );

// selecting button one by one .
// document.querySelectorAll("button")[1].addEventListener("click" , handleClick );
// document.querySelectorAll("button")[2].addEventListener("click" , handleClick );
// document.querySelectorAll("button")[3].addEventListener("click" , handleClick );
// document.querySelectorAll("button")[4].addEventListener("click" , handleClick );
// document.querySelectorAll("button")[5].addEventListener("click" , handleClick );
// document.querySelectorAll("button")[6].addEventListener("click" , handleClick );



// we can make it with a loop\

// For click 
for (var i = 0; i < 7 ;i++ ){
    document.querySelectorAll("button")[i].addEventListener("click" , function () {
        
        var buttonLetter = this.innerHTML;
        makeSound(buttonLetter);
        makeAnimation(buttonLetter);
          
    } );

}

// for keyboard press
document.addEventListener("keydown" ,function(event){
    makeSound(event.key);
    makeAnimation(event.key);
} )

function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3'); 
            crash.play();
            break;
        case "a":
            var kickBass = new Audio('sounds/kick-bass.mp3'); 
            kickBass.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3'); 
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3'); 
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3'); 
            tom2.play();
            break; 
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3'); 
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3'); 
            tom4.play();
            break;

        default: console.log(buttonLetter);
            break;
    }
 }

 // for animation of each image
function  makeAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");

    },100);
    

}

