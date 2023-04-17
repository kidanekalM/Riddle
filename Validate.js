let totalTime = document.getElementsByClassName('time')[0]
let totalTrips = document.getElementsByClassName('trips')[0]
totalTrips
totalTime
console.log(boat)

function validate(){


if(boat.offsetLeft==boat.parentElement.offsetLeft){
    //alert('validation')
    let obj=document.querySelectorAll('div.end img')
        
        if(!obj.length==0){
            
            if( $(".end").find("#goat").length>0 && $('.end img').length>=2){
              clearInterval(timeInc)  
             /* alert('game over') */
              
             display("You Lose",`Your time was${totalTime.innerHTML} seconds and you took ${totalTrips.innerHTML}trips for this trial`)
            }else if(obj.length==3){
                clearInterval(timeInc)
             display("You Win",`Your time was${totalTime.innerHTML} seconds and you took ${totalTrips.innerHTML} trips to win this riddle`)   
            }
              
        }
}
else{
    //alert('end from validate')
    
        let obj2=document.querySelectorAll('div.start img')
         if(obj2.length==0){
            display("You Win",`Your time was ${totalTime.innerHTML} seconds and you took ${totalTrips.innerHTML}trips to win this riddle`) 
            clearInterval(timeInc)
         }else if(obj2.length==2){
            if($('.start').find('#goat').length>0){
                clearInterval(timeInc)
                display("You Lose",`Your time was ${totalTime.innerHTML} seconds and you took ${totalTrips.innerHTML}trips for this trial`)

            }
         }
         
    
}

}  
validate()


