function* range(start, end, step=1){
    for(let i = start; i<=end; i +=step){
        yield i
    }
}

const numbers = [];

for(let i of range(0, 101)){
    numbers.push(i);
}

function isPrime(n){
    if(n<= 1){
        return false;
    }
    if(n<=3){
        return true;
    }
    if(n%2===0 || n%3===0){
        return false;
    }
    for(let i=5; i*i <= n; i += 6){
        if(n%i === 0 || n%(i +2) === 0){
            return false
        }
    }
    return true;
}

$(document).ready(function(){
    const card = $('.card')
    isPrime().css()
    for(number in numbers){
        if(number%2 === 0){
            $(this).css("background", "green")
        }else if(number%2 !=0){
            $(this).css("background", "yellow")
        }
    }
})