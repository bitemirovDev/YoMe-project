let items = document.querySelectorAll('.counter')

items.forEach(counter => {
    counter.innerHTML = 0
    let endValue = counter.getAttribute('data-num')
    let increament = endValue/10
    function changeValue (){
        let value = +counter.innerHTML
        if(value < endValue){
            value += Math.round(increament)
            counter.innerHTML = value
            setTimeout(changeValue, 100)
        }else{
            counter.innerHTML = endValue
        }
    }
    changeValue()
})