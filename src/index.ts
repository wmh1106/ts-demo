// 枚举
enum Sex {
    man,
    woman = 4
}

let person: {
    name: string,
    sex: Sex
}

person = {
    name: 'hh',
    sex: Sex.woman
}

console.log(person)