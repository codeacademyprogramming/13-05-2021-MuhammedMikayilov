const numberToWords = (number) => {
   return check(number)
}

const check = (number) => {
    let wordsDigit = ['Sıfır','Bir', "Iki", "Üç", "Dörd", "Beş", "Altı", "Yeddi", "Səkkiz", "Doqquz"];
    let wordsNumbs = ['On', "Yirmi", "Otuz", "Qırx", "Əlli", "Altmış", "Yetmiş", "Səksən", "Doxsan"];
    let hundred = ["Yüz"]

    if(number === 0){
        return wordsDigit[0]
    }
    if(number<=9 && number>=1){
        return wordsDigit[number]
    }
    if (number<=99 && number>=10) {
        if(number % 10 === 0){
            return wordsNumbs[Number(number.toString().split('')[0]) - 1];
        }
        else {
            let mode = number % 10;
            let result = wordsNumbs[Number(number.toString().split('')[0]) - 1] + " " + wordsDigit[mode]
            return result;
        }
    }
    if(number<=999 && number>=100) {
        if(number % 100 === 0) {
            let count_thousand = Number(number.toString().split('')[0])
            if(count_thousand !== 1){
                return wordsDigit[count_thousand] + " " + hundred[0];
            }
            return hundred[0]
        }
        else {
            let mode = number % 100;
            let splitted = number.toString().split('');
            let findNums = mode % 10;
            if(splitted[0] != 1){
                return wordsDigit[splitted[0]] + " " 
                    + hundred[0] + ' ' + wordsNumbs[Number(splitted[1]) - 1] + " " 
                    + wordsDigit[findNums];
            }
            return  hundred[0] + ' ' + wordsNumbs[Number(splitted[1]) - 1] + " " 
                    + wordsDigit[findNums];
        }
    }
    if(number > 999) {
        return "Zəhmət olmasa maksimum 3 rəqəmli ədəd yazın..."
    }   
    
    if(isNaN(number)) {
        document.querySelector(".number").style.color = "red"
        return "Zəhmət olmasa yalnız ədəd daxil edin!"
    }
    else{
        document.querySelector(".number").style.color = "black"
    }

}
console.log(numberToWords(9)); // Teklik
console.log(numberToWords(25)); // Onluq
console.log(numberToWords(739)); // Yuzluk

const input = document.querySelector("#input-numb");
const button = document.querySelector(".writeBtn");

button.addEventListener("click", ()=> {
    document.querySelector(".number").style.color = "black"
    document.querySelector(".number").innerHTML = `${numberToWords(input.value)}`
})

// 

 
