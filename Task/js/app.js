import {numberToWord} from "../../node_modules/@muhammed.mikayilov/homework-day-09/js/app.js"


const Main = () => {
    const input = document.getElementById("input-numb")
    const button = document.querySelector(".writeBtn")
    const number = document.querySelector(".number")

    button.addEventListener("click", ()=> {
        number.innerHTML = `
            ${numberToWord(input.value)}
        `
    })
}

Main()