// const wrongMsg = document.getElementById("wrong-msg")
// const successMsg = document.getElementById("success-msg")
// const guessBtn = document.getElementById("guess-btn")
// const randomImg = document.getElementById("random-img")
// let inputEl = document.getElementById("input-el")
let index = 0
let score = 0
jsonData = `[
    {
        "src": "luffy",
        "name":"Monkey D Luffy"
    },
    {
        "src": "naruto",
        "name":"Uzumaki Naruto"
    },
    {
        "src": "goku",
        "name":"Goku"
    },
    {
        "src": "eren",
        "name":"Eren Yeager"
    },
    {
        "src": "ichigo",
        "name":"Ichigo Kurosaki"
    },
    {
        "src": "midoriya",
        "name":"Izuku Midoriya"
    },
    {
        "src": "asta",
        "name":"Asta"
    },
    {
        "src": "tanjiro",
        "name":"Tanjiro Kamado"
    },
    {
        "src": "kakashi",
        "name":"Kakashi Hatake"
    },
    {
        "src": "gojo",
        "name":"Satoru Gojo"
    }
]
`
const characterList = JSON.parse(jsonData)
console.log(characterList)

function guess() {
    let value = document.getElementById("input-el").value
    let imgSrc = document.getElementById("random-img").src
    //characterList = getJsonData()
    console.log(typeof characterList[index])
    console.log(characterList[index].src)
    console.log(value.toLowerCase())
    if(imgSrc.includes(characterList[index].src) && value.toLowerCase() != "" &&
    (value.toLowerCase() === characterList[index].name.toLowerCase() || characterList[index].name.toLowerCase().includes(value.toLowerCase()))
    ) {
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
        console.log(`characters/${characterList[index].src}.jpg`)
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