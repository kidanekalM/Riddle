let cover = document.querySelector('.cover')
let reset = document.querySelector('.okay')
let trips = document.querySelector('.trips')
let start = document.getElementsByClassName('start')[0]
let end = document.getElementsByClassName('end')[0]

let time = document.getElementsByClassName('time')[0]
let m = document.querySelector('.message h1.message')
let d= document.querySelector('p.details')
let back = document.querySelector('.end .empty')

function display(message,detail)
{
    m.innerHTML=message
    d.innerHTML=detail
    cover.style.display="flex"
    if(message.includes('Can')){
       document.querySelector('.cover button').innerHTML = 'Start'
       document.querySelector('.scoreboard').style.display='none'
    }
    reset.addEventListener('click',()=>{
        if(document.querySelector('.cover button').innerHTML=='Start'){
            cover.style.display='none'
            $('.cover').style.display='none'
            document.getElementsByClassName('scoreboard')[0].style.display="flex"
            console.log(document.getElementsByClassName('scoreboard')[0].style.display="flex");
            time.innerHTML=0
        }
        location.reload()
        cover.style.display="none"
        time.innerHTML=0
        trips.innerHTML=0
        let objs = document.querySelectorAll('.end img')
        for (let obj=0;obj<objs.length; obj++) {
            obj.display='none'

            start.appendChild(objs[obj])
        }
        // alert(`${boat.offsetLeft + "  "+boat.parentElement.offsetLeft}`)
        if(boat.offsetLeft>boat.parentElement.offsetLeft){
            boat.offsetLeft=boat.parentElement.offsetLeft
            
        }
        // timeInc = setInterval(incr,t)
    })
}

