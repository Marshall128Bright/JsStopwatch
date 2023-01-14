let milsec = 0;
let sec = 0;
let min = 0;
const IntervalID = [];
const startWatch = () =>{
    milsec++;
   
    //makes sure that milliseconds don't exceed 100
    if(milsec <= 9 && milsec > 0){
        document.getElementById("milsec").innerHTML = "0" + milsec
    }else if(milsec == 100){
        milsec = 0;
        sec++;
        document.getElementById("milsec").innerHTML = "00";
    }else{
        document.getElementById("milsec").innerHTML = milsec;
    }
    

    //makes sure that seconds don't exceed 60
    if(sec == 60){
        sec=0;
        min++;
        document.getElementById("sec").innerHTML = "00";
        colourChanger('secBar');
        
    }else if(sec <= 9){
        document.getElementById("sec").innerHTML = "0" + sec;
    }else{
        document.getElementById("sec").innerHTML = sec;
    }

    if(min <=9){
        document.getElementById("min").innerHTML = "0" + min;
    }else{
        document.getElementById("min").innerHTML = min;
    }
   progressBar()
    
}

function progressBar(){
    let secProgress = (sec / 60 ) * 100;
    let minProgress = (min / 60 ) * 100;
    document.getElementById('secBar').style.width = secProgress + "%";
    
    if(secProgress == 60){
       if(minProgress <=60){
        document.getElementById("minBar").style.width = minProgress + "%";
        colourChanger('minBar');
        }
    }
}

function watch(state){
    const stopwatch = setInterval(startWatch,10);
    IntervalID.push(stopwatch);
    
    if(state == "stop"){
        for(let id of IntervalID){
            clearInterval(id); // this is to make sure that the watch stops irrespective of how many time there user clicked the start button
        }
        
        
    }else if(state == 'reset'){
        milsec = 0;
        sec = 0;
        min = 0;
        for(let id of IntervalID){
            clearInterval(id);
        }
        document.getElementById('secBar').style.width = "0%";
        document.getElementById('minBar').style.width = "0%";
        
        document.getElementById("milsec").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
    } else if(state == 'start'){
        document.getElementById('secBar').style.width = "0%";
        document.getElementById('minBar').style.width = "0%";
    }
        
    
}

const colourChanger = (el)=>{
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;
    document.getElementById(el).style.backgroundColor = `rgb(${r},${g},${b})`;
}

