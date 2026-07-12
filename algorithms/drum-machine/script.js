const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

pads.forEach(pad => {
    const audio = pad.querySelector("audio");
    pad.addEventListener("click", () => {
    audio.play();
    display.innerText = pad.id;
    })
})
