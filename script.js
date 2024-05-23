 let secondTime = 0;
 let hoursTime = 0;
 let minutesTime = 0;
    

 function StartTime() {
     
let oneInterval = setInterval(() => {
    secondTime++;
 if (secondTime === 60) {
    secondTime = 0;
    minutesTime++;
 if (minutesTime === 60) {
   minutesTime = 0;
    hoursTime++;
   if (hoursTime === 24) {
  hoursTime = 0;
         }
     }
    }         
           
  Clock22();

    if (secondTime === 0 && minutesTime % 1 === 0) {
      clearInterval(oneInterval);
       setTimeout(() => {
      oneInterval = setInterval(() => {
         secondTime++;
     if (secondTime === 60) {
         secondTime = 0;
         minutesTime++;
     if (minutesTime === 60) {
          minutesTime = 0;
     hoursTime++;
 if (hoursTime === 24) {
     hoursTime = 0;
    }
 }
 }
 Clock22();
      }, 1000);
 }, 0);
    }
 }, 1000);
 }

 function Clock22() {
const clockTime = 
 String(hoursTime).padStart(2, '0') + ':' + 
 String(minutesTime).padStart(2, '0') + ':' + 
 String(secondTime).padStart(2, '0');
        
document.getElementById('clock11').textContent = clockTime;
}

  window.onload = StartTime;
