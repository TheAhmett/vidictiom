const hedefDizi = ["a","h","m","e","t"]
let basilanlar = []

document.addEventListener("keydown", function(event) {
    basilanlar.push(event.key)

    if (basilanlar.length > hedefDizi.length) {
        basilanlar.shift()
    }

    if (JSON.stringify(basilanlar) === JSON.stringify(hedefDizi)) {
        window.location.href = "https://github.com/TheAhmett/vidictiom/blob/main/ahmet.png?raw=true", "_blank"
        basilanlar = []
    }
})
