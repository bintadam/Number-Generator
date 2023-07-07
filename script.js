function* range(start, end, step=1){
    for(let i = start; i<=end; i +=step){
        yield i
    }
}

const numbers = Array.from(range(0, 101));

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
    let cardContainer = $('<div id="card-container"></div>');
    for(let number of numbers){
        let card = $('<div class="card">' + number + '</div>')
        if(isPrime(number)){
            card.css("background", "rgb(249, 97, 97)")
        }else if(number%2 === 0){
            card.css("background", "rgb(78, 151, 103)")
        }else if(number%2 !== 0){
            card.css("background", "rgba(235, 235, 63, 0.896)")
        }
        cardContainer.append(card)
    }

    $("body").append(cardContainer);
})