let count = 0;
let countEl = document.getElementById("count-el") //gets the counter element
countEl.innerText = count


function increaseFunc() { //increases the counter when "increase button" is clicked
    count += 1
    countEl.innerText = count
    console.log("inc func called")

}

function decreaseFunc() { //decreases the counter when "decrease button" is clicked
    !(count <= 0) ? count -= 1: window.alert("Number of passengers cannot be Negative!"), console.warn("An attempt to enter negative value was blocked."); //decreases count if count is not <= 0
    countEl.innerText = count
    console.log("dec func called")

}

let displayCtr = document.getElementById("ctr-data")

function saveFunc() {
    displayCtr.textContent += count + " - "
    count = 0
    countEl.innerText = count
    console.log("save func called")

}


function resetCtr(){
    displayCtr.textContent = ""
}