function onPress(input) {
  switch (input) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(input);
      break;
  }
}

var acceptedInputs = ["w", "a", "s", "d", "k", "k", "l"];

function buttonAnimation(pressedKey) {
  if (acceptedInputs.includes(pressedKey)) {
    var activeButton = document.querySelector("." + pressedKey);
    activeButton.classList.add("pressed"); //adding class pressed to the button after it's been clicked / keypressed

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100); //removing the class pressed after a timer of .1 seconds to give an animation effect
  }
}
// Following code adds event listener to the buttons and calls onPress function with the buttons' InnerHTML when clicked

let btns = document.querySelectorAll(".drum ");

for (i of btns) {
  i.addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    onPress(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    // console.log((this.style.color = "white"));
  });
}
// A high order function which takes another function as an input (parameter)
document.addEventListener("keydown", function (Event) {
  var keyPress = Event.key;
  console.log(keyPress);
  onPress(keyPress);
  buttonAnimation(keyPress);
});
