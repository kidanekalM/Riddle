let boat = document.getElementById('boat')

let bod = document.body.firstElementChild.firstElementChild
// bod.style.display='none'
let imgs = document.querySelectorAll('div.start img')
let imgsEnd = document.querySelectorAll('div.end img')
let btnEmpty = document.querySelectorAll('.empty')
// boat.style.border ='2px solid red'

function GoEmpty()
{
    if(this.parentElement ==  document.querySelector('div.start'))
    {
        console.log(imgs[0].src)
        if(boat.offsetLeft == boat.parentElement.offsetLeft){
            $('#boat').animate({left:`${boat.parentElement.offsetWidth}`},1000)
            setTimeout(function(){
                boat.style.backgroundImage="none"
                boat.src = "img/boatBackward.png"
            },1500)
        }
        else{
            alert(boat.offsetLeft+" if > else  "+boat.parentElement.offsetLeft)
        }
    }
    else if (this.parentElement ==  document.querySelector('div.end'))
    {
        $('#boat').animate({left:`${boat.parentElement.previousElementSibling.offsetLeft}`},1000)
        setTimeout(function(){
            boat.style.backgroundImage="none"
            boat.src = "img/boatForward.png"
        },1500)
    }
}
 function AnimalStartClick()
{
    console.log(this.parentElement +'or '+ document.querySelector('div.start'))
    if(this.parentElement == document.querySelector('div.start'))
    {
        console.log(imgs[0].src)
        if(boat.offsetLeft == boat.parentElement.offsetLeft){
            let clickedObj = this 
            clickedObj.style.display = "none"
            boat.style.backgroundImage=`url('${this.src}')`
            $('#boat').animate({left:`${boat.parentElement.offsetWidth}`},1000)
            setTimeout(function(){
                boat.style.backgroundImage="none"
                document.getElementById('end').appendChild(clickedObj)
                clickedObj.style.display = 'block'
                boat.src = "img/boatBackward.png"
            },1500)
        }
        else{
            alert(boat.offsetLeft+" if > else  "+boat.parentElement.offsetLeft)
        }
    }
    else
    {
        // alert(boat.offsetLeft +" "+ (boat.parentElement.offsetWidth+ boat.parentElement.offsetLeft))
        if(boat.offsetLeft >= boat.parentElement.offsetWidth+boat.parentElement.offsetLeft){
            let clickedObj = this 
            clickedObj.style.display = "none"
            boat.style.backgroundImage=`url('${this.src}')`
            $('#boat').animate({left:`${boat.parentElement.previousElementSibling.offsetLeft}`},1000)
            setTimeout(function(){
                boat.style.backgroundImage="none"
                document.getElementById('start').appendChild(clickedObj)
                clickedObj.style.display = 'block'
                boat.src = "img/boatForward.png"
            },1500)
        }
        else{
            // alert("else > else")
            let clickedObj = this 
        }
    }
}

/**
 * Animal clikced in the end div event
 */

console.log(boat.offsetLeft)
for(let i=0;i<imgs.length;i++){
    imgs[i].addEventListener('click',AnimalStartClick)
}
for(let i=0;i<btnEmpty.length;i++)
{
    btnEmpty[i].addEventListener('click',GoEmpty)
}
