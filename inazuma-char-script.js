const inazumaCharacter = [
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/ayaka.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/yoimiya.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/RAIDEN.png?raw=true",
]

const inazumaName = [
    "AYAKA",
    "YOIMIYA",
    "RAIDEN"
]

const inazumaDescription = [
    "Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and determined. Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi.",
    "A talented pyrotechnician. The current owner of Naganohara Fireworks known as the 'Queen of the Summer Festival.' A girl filled with fiery passion. The uncompromising childish innocence and the obsession with craftsmanship intertwine in her to create a spectacular blaze.",
    "The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate. With the might of lightning at her disposal, she commits herself to the solitary pursuit of eternity."
]

const inazumaElement = [
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/cryo.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/pyrp.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/elec.png?raw=true"
]

const charBoxes = document.querySelectorAll(".char-box")
const charName = document.querySelector(".name p")
const charDescription = document.querySelector(".description h2")
const charImage = document.querySelector(".char-image")
const charNameElement = document.querySelector(".name img")

charName.innerHTML = inazumaName[0]
charDescription.innerHTML = inazumaDescription[0]
charImage.style.backgroundImage = "url(" + inazumaCharacter[0] + ")"
charNameElement.src = inazumaElement[0]

var i = 0;

charBoxes.forEach((charBox, index) => {
    charBox.addEventListener("click", function() {
        // console.log(index)
        charName.innerHTML = inazumaName[index]
        charDescription.innerHTML = inazumaDescription[index]
        charImage.style.backgroundImage = "url(" + inazumaCharacter[index] + ")"
        charNameElement.src = inazumaElement[index]
        
        i = index
    })
    // console.log(index)
})


const arrowLeft = document.querySelector(".prev")
arrowLeft.addEventListener("click", function () {
    console.log(i)
    if(i == 0){
        charName.innerHTML = inazumaName[inazumaName.length - 1]
        charDescription.innerHTML = inazumaDescription[inazumaCharacter.length - 1]
        charImage.style.backgroundImage = "url(" + inazumaCharacter[inazumaCharacter.length - 1] + ")"
        charNameElement.src = inazumaElement[inazumaCharacter.length - 1]
        i = inazumaCharacter.length
    } else{
        charName.innerHTML = inazumaName[i - 1]
        charDescription.innerHTML = inazumaDescription[i - 1]
        charImage.style.backgroundImage = "url(" + inazumaCharacter[i - 1] + ")"
        charNameElement.src = inazumaElement[i - 1]
        i -= 1
    }
})

const arrowNext = document.querySelector(".next")
arrowNext.addEventListener("click", function () {
    console.log(i)
    if(i == inazumaCharacter.length - 1){
        charName.innerHTML = inazumaName[0]
        charDescription.innerHTML = inazumaDescription[0]
        charImage.style.backgroundImage = "url(" + inazumaCharacter[0] + ")"
        charNameElement.src = inazumaElement[0]
        i = 0
    } else{
        charName.innerHTML = inazumaName[i + 1]
        charDescription.innerHTML = inazumaDescription[i + 1]
        charImage.style.backgroundImage = "url(" + inazumaCharacter[i + 1] + ")"
        charNameElement.src = inazumaElement[i + 1]
        i += 1
    }
})
