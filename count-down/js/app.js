const enddate= "27 March 2023 10:00 PM"

document.getElementById("endDate").innerText=enddate;
const inputs= document.querySelectorAll("input")

// const clock = () =>{

// }
// ya ek tareeka h function clock(){

// }

function clock(){
    const end =new Date(enddate)
    const now =new Date()
    // console.log(end,now);
    const diff= (end-now)/1000; // mili seconds to sec
    // convert into days
    // for not getting the minus values
    if(diff < 0) return;

    inputs[0].value=Math.floor(diff /3600/24);
    inputs[1].value=(Math.floor(diff/3600) % 24);
    inputs[2].value=(Math.floor(diff/60) % 60);
    inputs[3].value=(Math.floor(diff) % 60);
    




}

// initial call but called only once so now we will make a variable call in every second
clock()

/*
1 day= 24 hr
1hr= 60 min
60 min=36000 sec


*/

setInterval ( () => {
    clock()
},1000
)