const liyueCharacter = [
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/zhongli.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/ganyu.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/hutao.png?raw=true",
]

const liyueName = [
    "ZHONGLI",
    "GANYU",
    "HUTAO"
]

const liyueDescription = [
    "Wangsheng Funeral Parlor mysterious consultant. Handsome, elegant, and surpassingly learned. Though no one knows where Zhongli is from, he is a master of courtesy and rules. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals.",
    "The secretary to the Liyue Qixing. The blood of both human and illuminated beast flows within her veins. Graceful and quiet by nature, yet the gentle disposition of qilin sees not even the slightest conflict with even the most arduous of workloads. After all, Ganyu firmly believes that all the work she does is in honor of her contract with Rex Lapis, seeking the well-being of all living things within Liyue.",
    "Hu Tao is the 77th Director of the Wangsheng Funeral Parlor, a person vital to managing Liyue's funerary affairs. She does her utmost to flawlessly carry out a person's last rites and preserve the world's balance of yin and yang. Aside from this, she is also a talented poet whose many 'masterpieces' have passed around Liyue's populace by word of mouth."
]

const liyueElement = [
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/geo.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/cryo.png?raw=true",
    "https://github.com/MichaelScu/Jenshin-Impekz/blob/main/assets/charregion/pyrp.png?raw=true"
]

const charBoxes = document.querySelectorAll(".char-box")
const charName = document.querySelector(".name p")
const charDescription = document.querySelector(".description h2")
const charImage = document.querySelector(".char-image")
const charNameElement = document.querySelector(".name img")

charName.innerHTML = liyueName[0]
charDescription.innerHTML = liyueDescription[0]
charImage.style.backgroundImage = "url(" + liyueCharacter[0] + ")"
charNameElement.src = liyueElement[0]

var i = 0;

charBoxes.forEach((charBox, index) => {
    charBox.addEventListener("click", function() {
        // console.log(index)
        charName.innerHTML = liyueName[index]
        charDescription.innerHTML = liyueDescription[index]
        charImage.style.backgroundImage = "url(" + liyueCharacter[index] + ")"
        charNameElement.src = liyueElement[index]
        
        i = index
    })
    // console.log(index)
})


const arrowLeft = document.querySelector(".prev")
arrowLeft.addEventListener("click", function () {
    console.log(i)
    if(i == 0){
        charName.innerHTML = liyueName[liyueName.length - 1]
        charDescription.innerHTML = liyueDescription[liyueCharacter.length - 1]
        charImage.style.backgroundImage = "url(" + liyueCharacter[liyueCharacter.length - 1] + ")"
        charNameElement.src = liyueElement[liyueCharacter.length - 1]
        i = liyueCharacter.length
    } else{
        charName.innerHTML = liyueName[i - 1]
        charDescription.innerHTML = liyueDescription[i - 1]
        charImage.style.backgroundImage = "url(" + liyueCharacter[i - 1] + ")"
        charNameElement.src = liyueElement[i - 1]
        i -= 1
    }
})

const arrowNext = document.querySelector(".next")
arrowNext.addEventListener("click", function () {
    console.log(i)
    if(i == liyueCharacter.length - 1){
        charName.innerHTML = liyueName[0]
        charDescription.innerHTML = liyueDescription[0]
        charImage.style.backgroundImage = "url(" + liyueCharacter[0] + ")"
        charNameElement.src = liyueElement[0]
        i = 0
    } else{
        charName.innerHTML = liyueName[i + 1]
        charDescription.innerHTML = liyueDescription[i + 1]
        charImage.style.backgroundImage = "url(" + liyueCharacter[i + 1] + ")"
        charNameElement.src = liyueElement[i + 1]
        i += 1
    }
})
