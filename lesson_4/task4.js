function ObjectFunck(obj) {

    let a = obj.split('')
    if (a.length == 1) {
        return ObjNew = {
            'Единицы': a[0]
        }
    } else if (a.length == 2) {

        return ObjNew = {
            'Единицы': a[1],
            'Десятки': a[0]
        }
    } else if (a.length == 3) {

        return ObjNew = {
            'Единицы': a[2],
            'Десятки': a[1],
            'Сотни': a[0]

        }
    } else {
        return ob = {}
    }
}

a = ObjectFunck(prompt('Введите число от 0-999'))

console.log(a)