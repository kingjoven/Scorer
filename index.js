let count = 0
let add = 0
let home = document.getElementById("home")
let guest = document.getElementById("guest")

function sq() {
    count += 1
    home.textContent = count
}
function sq1() {
    count += 2
    home.textContent = count
} 
function sq2() {
    count += 3
    home.textContent = count
} 
function sq3() {
    add += 1
    guest.textContent = add
}
function sq4() {
    add += 2
    guest.textContent = add
}

function sq5() {
    add += 3
    guest.textContent = add
}