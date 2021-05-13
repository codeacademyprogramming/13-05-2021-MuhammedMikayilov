const checkout = (number) => {
    const wordsDigit = ['Sıfır','Bir', "Iki", "Üç", "Dörd", "Beş", "Altı", "Yeddi", "Səkkiz", "Doqquz"];
    const wordsNumbs = ['On', "Yirmi", "Otuz", "Qırx", "Əlli", "Altmış", "Yetmiş", "Səksən", "Doxsan"];
    const hundredSystem = ["Iki", "Üç", "Dörd", "Beş", "Altı", "Yeddi", "Səkkiz", "Doqquz"]

    let numberToString = number.toString();
    let numberFirstValu = numberToString[0]
    let length = number.toString().length;
    let word = '' ;

    // console.log(numberFirstValu);
    if(numberFirstValu === "0"){
        return "Sıfırla başlayan ədəd olmur!!!"
    }

    if(number===0){
      word="SIFIR";
  }
    if(length===1 && number!==0){
        word=wordsDigit[number];
    }
    if(length==2){
      word=wordsNumbs[parseInt(numberToString[0])-1] +" "+ wordsDigit[parseInt(numberToString[1])];
    }
    if(length==3){
      if(numberToString[1]=="0"){
          word=[parseInt(numberToString[0])-1] +" Yüz " + wordsDigit[parseInt(numberToString[2])];
      }
      else{
          word=hundredSystem[parseInt(numberToString[0])-2] +" Yüz "+ wordsNumbs[parseInt(numberToString[1])-1] + " "+ wordsDigit[parseInt(numberToString[2])];
      }
    }
    return word;
  }
const numberToWord = (number) => {
    if(number>1000 && number<1000000 && number%1000!=0){
        return checkout((number-number%1000)/1000) + " Min " + checkout(number%1000);
    }
    if(number>1000 && number<1000000 && number%1000==0){
        return checkout((number-number%1000)/1000) + " Min";
    }
    if(number===1000){
        return "Min";
    }
    if(number>1000000){
        return "Bir milyon. Limit dolmuşdur. Zəhmət olmasa daha kiçik ədədləri yoxlayın."
    }
    else{
        return checkout(number);
    }
}


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

Main();