const btn = document.querySelector(".generate");

const generateNumber = () => {
    //generate number btn 1-10
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log(randomNumber);
    document.getElementById("number").innerHTML = randomNumber;
}
btn.addEventListener("click", generateNumber);
//const rand = Math.floor(Math.random() * 10 + 1);
//console.log(rand);
