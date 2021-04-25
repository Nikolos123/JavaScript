

let moneyArray = new Array()
moneyArray.push(0)
let nameall = new Array()
let arrayMy = new Array()

function summa(a) {
    moneyArray[0] = moneyArray[0] + a;
}

function countBasketPrice(a, nameAdd, money) {
    let Obj = Object.create({
        name: nameAdd,
        howMuch: money
    })
    nameall.push(Obj)
    summa(Obj.howMuch)
    console.log(Obj, nameall, moneyArray)

}

// debugger
const div = document.querySelector('div');

div.addEventListener('click', ({ target }) => {
    if (target.innerText === 'apple') {
        countBasketPrice(arrayMy, target.innerText, 30)
    }

    else if (target.innerText === 'juce') {
        countBasketPrice(arrayMy, target.innerText, 60)
    }
    else if (target.innerText === 'banana') {
        countBasketPrice(arrayMy, target.innerText, 73)
    }
    else if (target.innerText === 'tomato') {
        countBasketPrice(arrayMy, target.innerText, 120)
    }
}


);

