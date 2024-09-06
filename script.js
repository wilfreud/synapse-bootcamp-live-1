const orangebox = document.getElementById("orangebox")
const orangeCount = 180

// orangebox gridding settings
orangebox.style.gridTemplateColumns = "repeat(20, 1fr)"

function orangeCreator(orangeId){
    let imgCreate = document.createElement("img")
    imgCreate.src = "orange.svg"
    imgCreate.title = "Click to spin"
    imgCreate.classList.add("orange")
    orangebox.appendChild(imgCreate)

    if (orangeId === Math.floor(orangeCount/2)) {
        imgCreate.classList.add("triggeredOrange")
        imgCreate.title = "Click to spin *"}

    if (orangeId === Math.floor(orangeCount/3)) {
        imgCreate.classList.add("stepOrange")
        imgCreate.title = "Click to spin **"
    }

    animeIt(imgCreate)
}
// This functions add the class that lauches the animation and removes it wehn animation finished
function animeIt(itemAnim){
        itemAnim.addEventListener("click", () => {
        itemAnim.classList.add("animate")
        itemAnim.addEventListener("animationend", () => {itemAnim.classList.remove("animate")})
    })
}


// Generates the oranges
for (let index = 0; index < orangeCount; index++) {orangeCreator(index)}

// Easter egg spin all on cheat code enter
document.querySelector(".triggeredOrange").addEventListener("click", () => {
    let belugaPass = prompt("Enter Secret cheat code: ")
    
    // Activates the animation if password correct
    if (belugaPass === "spinAll") {
        document.querySelectorAll(".orange").forEach(element => {
            element.classList.add("animate")
            element.addEventListener("animationend", () => {element.classList.remove("animate")})
        })
    }
    else{alert("Unknown cheat code")}
})

// Eater egg spin progressively cheat code enter
var stepOrange = document.querySelector(".stepOrange")
stepOrange.addEventListener("click", () => {
    stepOrange.classList.remove("animate")
    let belugaPass = prompt("Enter Secret cheat code: ")
    
    // Activates the animation if password correct
    if (belugaPass === "spinStep") {
        let org = document.querySelectorAll(".orange")
        let ff = 0
        
        //Adding animate tag on interval
        let stepAnim = setInterval( () => {
            org[ff].classList.add("animate")
            ff++
            if (ff === orangeCount) {clearInterval(stepAnim)}
        }, 30)

        // Removes animate tag after animationing
        org.forEach(item => {
            item.addEventListener("animationend", () => {item.classList.remove("animate")}
            )}
            )
    }
    else{alert("Unknown cheat code")}
})