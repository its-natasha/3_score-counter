
let scoreEl = document.getElementById("score-el")
let countEl = document.getElementById("count-el")
let historyEl = document.getElementById("hist-el")
let scoreElTeam2 = document.getElementById("score-el-2")

let count = 0
let countteam2 = 0

// Team # 1 score adder

function add1() {
    count += 1
    scoreEl.textContent = count
}

function add2() {
    count += 2
    scoreEl.textContent = count
}

function add3() {
    count += 3
    scoreEl.textContent = count
}

function reset() {
    count = 0
    scoreEl.innerText = 0
    countteam2 = 0
    scoreElTeam2.innerText = 0
}

// Team # 2 score adder

function add1team2(){
    countteam2 += 1
    scoreElTeam2.textContent = countteam2
}

function add2team2() {
    countteam2 += 2
    scoreElTeam2.textContent = countteam2
}

function add3team2(){
    countteam2 += 3
    scoreElTeam2.textContent = countteam2
}

function save() {    
    historyEl.textContent += count + ":" + countteam2 + ", "
    alert(`Congratlations ${count > countteam2 ? "Team 1" : count < countteam2 ? "Team 2" : "Draw"}!`)
    confetti()
    
}

function confetti() {
   const jsConfetti = new JSConfetti()
   jsConfetti.addConfetti()
    //jsConfetti.addConfetti({
   //emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
//})
    }
    
    











