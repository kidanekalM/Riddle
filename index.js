let t = 1000;
let timeInc = setInterval(incr, t);
display('Can you solve this Riddle? ','You are taking a trip with a goat tiger and and a bag of cabbage. You reach a river and you have a small boat that can carry only one person and an object')
console.log('asdfasfdsadfas');
function incr() {
  let time = document.getElementsByClassName("time")[0];
  time.innerHTML = (parseInt(time.innerHTML) + 1).toString();
  console.log(time);
}

document
  .getElementsByClassName("stop")[0]
  .addEventListener("click", function () {
    console.log("clear int");
    if("Stop" == this.innerText){
        clearInterval(timeInc);
          this.innerText = "Start"
        for(let i = 0;i<imgs.length;i++){
            imgs[i].removeEventListener('click',AnimalStartClick)
        }
    }
    else if ("Start" == this.innerText){
         timeInc = setInterval(incr,t)
          this.innerText="Stop"
          for(let i = 0;i<imgs.length;i++){
            imgs[i].addEventListener('click',AnimalStartClick)
        }
    }
  });

