const kelime = ["a","h","m","e","t"]
let basilanlar = []

document.addEventListener("keydown", function(event) {
    basilanlar.push(event.key)

    if (basilanlar.length > kelime.length) {
        basilanlar.shift()
    }

    if (JSON.stringify(basilanlar) === JSON.stringify(kelime)) {
        window.location.href = "https://github.com/TheAhmett/vidictiom/blob/main/ahmet.png?raw=true", "_blank"
        basilanlar = []
    }
})
