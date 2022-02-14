// const wrongMsg = document.getElementById("wrong-msg")
// const successMsg = document.getElementById("success-msg")
// const guessBtn = document.getElementById("guess-btn")
// const randomImg = document.getElementById("random-img")
// let inputEl = document.getElementById("input-el")
let index = 0
let score = 0
// jsonData = `[
//     {
//         "src": "luffy",
//         "name":"Monkey D Luffy"
//     },
//     {
//         "src": "naruto",
//         "name":"Uzumaki Naruto"
//     },
//     {
//         "src": "goku",
//         "name":"Goku"
//     },
//     {
//         "src": "eren",
//         "name":"Eren Yeager"
//     },
//     {
//         "src": "ichigo",
//         "name":"Ichigo Kurosaki"
//     },
//     {
//         "src": "midoriya",
//         "name":"Izuku Midoriya"
//     },
//     {
//         "src": "asta",
//         "name":"Asta"
//     },
//     {
//         "src": "tanjiro",
//         "name":"Tanjiro Kamado"
//     },
//     {
//         "src": "kakashi",
//         "name":"Kakashi Hatake"
//     },
//     {
//         "src": "gojo",
//         "name":"Satoru Gojo"
//     }
// ]
// `
let characterList = []
const jsonData = async () => {
    const response = await fetch('/data/character_list.json')
    let data = await response.json()
    characterList = data
    return data
} 
jsonData()


function guess() {
    let value = document.getElementById("input-el").value
    let imgSrc = document.getElementById("random-img").src
    if(imgSrc.includes(characterList[index].src + '.jpg') && value.toLowerCase() != "" &&
    (value.toLowerCase() === characterList[index].name.toLowerCase() || value.toLowerCase() === characterList[index].src.toLowerCase())
    )  {
        document.getElementById("success-msg").style.display = 'block'
        score += 1
    } else {
        document.getElementById("wrong-msg").style.display = 'block'
    }
}

function random() {
    index += 1
    document.getElementById("input-el").value = ""
    document.getElementById("success-msg").style.display = 'none'
    document.getElementById("wrong-msg").style.display = 'none'

    if(index === characterList.length){
        document.getElementById("random-img").style.display = 'none'
        document.getElementById("next-btn").style.display = 'none'
        document.getElementById("score").innerHTML = `Your score: ${score}/${characterList.length}`
        document.getElementById("score").style.display = 'block'

    } else {
        // console.log(`characters/${characterList[index].src}.jpg`)
        document.getElementById("random-img").src = `characters/${characterList[index].src}.jpg`
    }
}

function reset() {
    index = 0
    score = 0
    document.getElementById("random-img").src = `characters/${characterList[index].src}.jpg`
    document.getElementById("random-img").style.display = 'block'
    document.getElementById("next-btn").style.display = 'inline-block'
    document.getElementById("score").style.display = 'none'
    document.getElementById("success-msg").style.display = 'none'
    document.getElementById("wrong-msg").style.display = 'none'

}