let homePoints = document.getElementById("homePoints")
let guestPoints = document.getElementById("guestPoints")
let quarterPoints = document.getElementById("quarter-round")
let homeFoulPoints = document.getElementById("homeFoulPoints")
let guestFoulPoints = document.getElementById("guestFoulPoints")

let homeFoulPoint = 0
let guestFoulPoint = 0
let quarterRound = 0
let homeScore = 0
let guestScore = 0

function onePointHome() {
    homeScore += 1
    homePoints.innerText = homeScore
    checklead()
}

function twoPointHome() {
    homeScore += 2
    homePoints.innerText = homeScore
    checklead()
}

function threePointHome() {
    homeScore += 3
    homePoints.innerText = homeScore
    checklead()
}

function onePointGuest() {
    guestScore += 1
    guestPoints.innerText = guestScore
    checklead()
}

function twoPointGuest() {
    guestScore += 2
    guestPoints.innerText = guestScore
    checklead()
}

function threePointGuest() {
    guestScore += 3
    guestPoints.innerText = guestScore
    checklead()
}

function addQuarter() {
    if (quarterRound < 4) {
        quarterRound += 1
        quarterPoints.innerText = quarterRound 
    }
}

function minusQuarter() {
    if (quarterRound != 0) {
        quarterRound -= 1
        quarterPoints.innerText = quarterRound
    }
}

function homeInvalidFoul() {
    if (homeFoulPoint != 0) {
        homeFoulPoint -= 1
        homeFoulPoints.innerText = homeFoulPoint
    }
}

function homeValidFoul() {
    homeFoulPoint += 1
    homeFoulPoints.innerText = homeFoulPoint
}

function guestInvalidFoul() {
    if (guestFoulPoint != 0) {
        guestFoulPoint -= 1
        guestFoulPoints.innerText = guestFoulPoint
    }
}

function guestValidFoul() {
    guestFoulPoint += 1
    guestFoulPoints.innerText = guestFoulPoint
}

function resetGame() {
    homeFoulPoint = 0;
    guestFoulPoint = 0;
    quarterRound = 0;
    homeScore = 0;
    guestScore = 0;

    homePoints.innerText = 0;
    guestPoints.innerText = 0;
    quarterPoints.innerText = 0;
    homeFoulPoints.innerText = 0;
    guestFoulPoints.innerText = 0;
    resetTimer();
}