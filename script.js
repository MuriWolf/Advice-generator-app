const advice = document.querySelector("#advice")
const adviceID = advice.querySelector(".advice-id")
const adviceText = advice.querySelector(".advice-text")

const refreshBtn = document.querySelector("#refresh-btn")

refreshBtn.addEventListener("click", function() {
    fetch("https://api.adviceslip.com/advice")
    .then((resp) => resp.json())
    .then(data => {
        adviceID.innerText = `Advice # ${data.slip.id}`
        adviceText.innerText = `"${data.slip.advice}"`

    }) 
})