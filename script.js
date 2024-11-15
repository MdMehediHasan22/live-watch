let countInterval;
let isRunning = false;

function updateClock(){
    const now = new Date();
    let hours = String(now.getHours()).padStart(2,'0');
    let minutes = String(now.getMinutes()).padStart(2,'0');
    let seconds = String(now.getSeconds()).padStart(2,'0');
    document.getElementById('live-clock').textContent = `${hours}:${minutes}:${seconds}`;
}
function startClock(){
      if(!isRunning){
        isRunning = true;
        updateClock();
        countInterval =  setInterval(updateClock,1000);
      }
}
function stopClock(){
    clearInterval(countInterval);
    isRunning=false;

}
function resetClock(){
    stopClock();
    document.getElementById('live-clock').textContent = "00:00:00";

}