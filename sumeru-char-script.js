const sumeruCharacter = [
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/nilou.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/nahida.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/dehya.png?raw=true",
]

const sumeruName = [
    "NILOU",
    "NAHIDA",
    "DEHYA"
]

const sumeruDescription = [
    "Star of the Zubayr Theater. Her dance is as graceful as a water lily in first bloom, pure and pristine. But she is by no means a haughty and cold person. Even the most hurried traveler will not forget her innocent and radiant smile.",
    "Lesser Lord Kusanali dwells deep in the Sanctuary of Surasthana, and has never really been in the limelight, nor has she even been mentioned much.Her burden is heavy, but though she may experience loneliness, and though darkness is all she sees before her, she will not stop moving forward.",
    "A member of 'The Eremites,' a loosely-organized mercenary organization. She is brave, powerful, and enjoys an excellent reputation among mercenaries."
]

const sumeruElement = [
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/hydro.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/dendro.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/pyrp.png?raw=true"
]

const charBoxes = document.querySelectorAll(".char-box")
const charName = document.querySelector(".name p")
const charDescription = document.querySelector(".description h2")
const charImage = document.querySelector(".char-image")
const charNameElement = document.querySelector(".name img")

charName.innerHTML = sumeruName[0]
charDescription.innerHTML = sumeruDescription[0]
charImage.style.backgroundImage = "url(" + sumeruCharacter[0] + ")"
charNameElement.src = sumeruElement[0]

var i = 0;

charBoxes.forEach((charBox, index) => {
    charBox.addEventListener("click", function() {
        // console.log(index)
        charName.innerHTML = sumeruName[index]
        charDescription.innerHTML = sumeruDescription[index]
        charImage.style.backgroundImage = "url(" + sumeruCharacter[index] + ")"
        charNameElement.src = sumeruElement[index]
        
        i = index
    })
    // console.log(index)
})


const arrowLeft = document.querySelector(".prev")
arrowLeft.addEventListener("click", function () {
    console.log(i)
    if(i == 0){
        charName.innerHTML = sumeruName[sumeruName.length - 1]
        charDescription.innerHTML = sumeruDescription[sumeruCharacter.length - 1]
        charImage.style.backgroundImage = "url(" + sumeruCharacter[sumeruCharacter.length - 1] + ")"
        charNameElement.src = sumeruElement[sumeruCharacter.length - 1]
        i = sumeruCharacter.length
    } else{
        charName.innerHTML = sumeruName[i - 1]
        charDescription.innerHTML = sumeruDescription[i - 1]
        charImage.style.backgroundImage = "url(" + sumeruCharacter[i - 1] + ")"
        charNameElement.src = sumeruElement[i - 1]
        i -= 1
    }
})

const arrowNext = document.querySelector(".next")
arrowNext.addEventListener("click", function () {
    console.log(i)
    if(i == sumeruCharacter.length - 1){
        charName.innerHTML = sumeruName[0]
        charDescription.innerHTML = sumeruDescription[0]
        charImage.style.backgroundImage = "url(" + sumeruCharacter[0] + ")"
        charNameElement.src = sumeruElement[0]
        i = 0
    } else{
        charName.innerHTML = sumeruName[i + 1]
        charDescription.innerHTML = sumeruDescription[i + 1]
        charImage.style.backgroundImage = "url(" + sumeruCharacter[i + 1] + ")"
        charNameElement.src = sumeruElement[i + 1]
        i += 1
    }
})
