// Get the modal
let modal = document.getElementById("modal");

// Get the button that opens the modal
let btn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the Demo Video in the modal

let vid = document.getElementById("demo-video");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  console.log("modal");
  
  modal.style.display = "block";
  playVid();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  restartVid();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    this.restartVid();
  }
}

// When the user hits Esc, close the modal
window.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    if (modal.style.display === "block"){
      modal.style.display = "none";
      restartVid();
    }
  }
})

// Functions for managing video play

function playVid() {
  vid.play();
}

function restartVid() {
  vid.pause();
  vid.currentTime = 0;
}