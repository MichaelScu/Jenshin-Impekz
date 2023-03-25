const mondstadtCharacter = [
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/jean.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/AMBER.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/eula.png?raw=true",
]

const mondstadtName = [
    "JEAN",
    "AMBER",
    "EULA"
]

const mondstadtDescription = [
    "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt. She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.",
    "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
    "A rebellious descendant of the old aristocracy who is always out on the battlefield.As one born into the old aristocracy, carrying the bloodline of sinners, Eula has needed a unique approach to the world to navigate the towering walls of prejudice peacefully. Of course, this did not prevent her from severing ties with her clan. As the outstanding Spindrift Knight, she hunts down Mondstadt's enemies in the wild to exact her unique 'vengeance.'"
]

const mondstadtElement = [
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/anemo.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/pyrp.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/cryo.png?raw=true"
]

const charBoxes = document.querySelectorAll(".char-box")
const charName = document.querySelector(".name p")
const charDescription = document.querySelector(".description h2")
const charImage = document.querySelector(".char-image")
const charNameElement = document.querySelector(".name img")

charName.innerHTML = mondstadtName[0]
charDescription.innerHTML = mondstadtDescription[0]
charImage.style.backgroundImage = "url(" + mondstadtCharacter[0] + ")"
charNameElement.src = mondstadtElement[0]

var i = 0;

charBoxes.forEach((charBox, index) => {
    charBox.addEventListener("click", function() {
        // console.log(index)
        charName.innerHTML = mondstadtName[index]
        charDescription.innerHTML = mondstadtDescription[index]
        charImage.style.backgroundImage = "url(" + mondstadtCharacter[index] + ")"
        charNameElement.src = mondstadtElement[index]
        
        i = index
    })
    // console.log(index)
})


const arrowLeft = document.querySelector(".prev")
arrowLeft.addEventListener("click", function () {
    console.log(i)
    if(i == 0){
        charName.innerHTML = mondstadtName[mondstadtName.length - 1]
        charDescription.innerHTML = mondstadtDescription[mondstadtCharacter.length - 1]
        charImage.style.backgroundImage = "url(" + mondstadtCharacter[mondstadtCharacter.length - 1] + ")"
        charNameElement.src = mondstadtElement[mondstadtCharacter.length - 1]
        i = mondstadtCharacter.length
    } else{
        charName.innerHTML = mondstadtName[i - 1]
        charDescription.innerHTML = mondstadtDescription[i - 1]
        charImage.style.backgroundImage = "url(" + mondstadtCharacter[i - 1] + ")"
        charNameElement.src = mondstadtElement[i - 1]
        i -= 1
    }
})

const arrowNext = document.querySelector(".next")
arrowNext.addEventListener("click", function () {
    console.log(i)
    if(i == mondstadtCharacter.length - 1){
        charName.innerHTML = mondstadtName[0]
        charDescription.innerHTML = mondstadtDescription[0]
        charImage.style.backgroundImage = "url(" + mondstadtCharacter[0] + ")"
        charNameElement.src = mondstadtElement[0]
        i = 0
    } else{
        charName.innerHTML = mondstadtName[i + 1]
        charDescription.innerHTML = mondstadtDescription[i + 1]
        charImage.style.backgroundImage = "url(" + mondstadtCharacter[i + 1] + ")"
        charNameElement.src = mondstadtElement[i + 1]
        i += 1
    }
})
