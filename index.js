let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
function increaseHomeBy1() {
    homeScore.innerText = parseInt(homeScore.innerText) + 1
}
function increaseHomeBy2() {
    homeScore.innerText = parseInt(homeScore.innerText) + 2
}
function increaseHomeBy3() {
    homeScore.innerText = parseInt(homeScore.innerText) + 3
}
function increaseGuestBy1() {
    guestScore.innerText = parseInt(guestScore.innerText) + 1 
}
function increaseGuestBy2() {
    guestScore.innerText = parseInt(guestScore.innerText) + 2   
}
function increaseGuestBy3() {
    guestScore.innerText = parseInt(guestScore.innerText) + 3   
}

function reset() {
    homeScore.innerText = 0;
    guestScore.innerText = 0;
}