function validate(){

    if(boat.offsetLeft==boat.parentElement.offsetLeft){
        //alert('validation')
        let obj=document.querySelectorAll('div.end img')

            if(!obj.length==0){
                
                if( $(".end").find("#goat").length>0 && $('.end img').length>=2){
                  clearInterval(timeInc)  
                 alert('game over')
                }else if(obj.length==3){
                    clearInterval(timeInc)
                      alert('you win')   
                }
                  
            }
    }
    else{
        //alert('end from validate')
        
            let obj2=document.querySelectorAll('div.start img')
             if(obj2.length==0){
                clearInterval(timeInc)
                alert('you win')
             }else if(obj2.length==2){
                if($('.start').find('#goat').length>0){
                    clearInterval(timeInc)
                    alert('game over')
                }
             }
             
        
    }
    
}  
validate()
  

