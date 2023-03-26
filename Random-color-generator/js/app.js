const getcolor = () =>
{// event call
    const randomNumber= Math.floor(Math.random()*16777215);
    const randomCode="#"+ randomNumber.toString(16);
    console.log(randomNumber,randomCode)
    document.body.style.backgroundColor =randomCode;
    document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode); // it will automatic copy  
}

document.getElementById("btn").addEventListener("click",getcolor)
// initial call

getcolor()