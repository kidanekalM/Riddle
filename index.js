let t = 1000
let timeInc = setInterval(incr,t)

function incr(){
    let time = document.getElementsByClassName('time')[0]
        time.innerHTML = (parseInt(time.innerHTML)+1).toString()
        console.log(time)
}

document.getElementsByClassName('stop')[0].addEventListener('click',function(){
    console.log('clear int')
    clearInterval(timeInc)
    document.getElementsByClassName('cover')[0].getElementsByClassName.display='block'
})
